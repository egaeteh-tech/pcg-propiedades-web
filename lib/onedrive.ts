import { graphGet } from "./msgraph";
import type { Property, PropertyType } from "@/data/properties";

const UPN = () => process.env.ONEDRIVE_USER_UPN!;
const ROOT = () => process.env.ONEDRIVE_ROOT_FOLDER ?? "PCG Propiedades";

// Base path for Graph drive item by path
function drivePath(subpath: string) {
  return `/users/${UPN()}/drive/root:/${ROOT()}${subpath}`;
}

interface DriveChildren {
  value: { name: string; folder?: object; file?: object }[];
}

interface DriveItem {
  "@microsoft.graph.downloadUrl"?: string;
  name: string;
  id: string;
}

// Read and parse info.json for a property folder
async function readPropertyInfo(
  type: PropertyType,
  folderName: string
): Promise<Property | null> {
  try {
    const item = await graphGet<DriveItem>(
      `${drivePath(`/${type}/${folderName}/info.json`)}:/content`
    );
    // When fetching content, Graph returns a redirect — we need the download URL
    // For JSON files Graph returns the content directly as parsed JSON via graphGet
    return item as unknown as Property;
  } catch {
    return null;
  }
}

// Get public thumbnail/download URL for a photo inside a property folder
export async function getPropertyImageUrl(
  type: PropertyType,
  folderName: string,
  fileName: string
): Promise<string | null> {
  try {
    const item = await graphGet<DriveItem>(
      `${drivePath(`/${type}/${folderName}/${fileName}`)}`
    );
    return item["@microsoft.graph.downloadUrl"] ?? null;
  } catch {
    return null;
  }
}

// Fetch all image URLs for a property folder (skips info.json)
async function getPropertyImages(
  type: PropertyType,
  folderName: string
): Promise<string[]> {
  try {
    const children = await graphGet<DriveChildren>(
      `${drivePath(`/${type}/${folderName}`)}:/children`
    );
    const imageFiles = children.value.filter(
      (f) => f.file && f.name !== "info.json"
    );
    const urls = await Promise.all(
      imageFiles.map((f) => getPropertyImageUrl(type, folderName, f.name))
    );
    return urls.filter(Boolean) as string[];
  } catch {
    return [];
  }
}

// Fetch all properties of a given type from OneDrive
export async function getPropertiesFromOneDrive(
  type: PropertyType
): Promise<Property[]> {
  if (!UPN()) {
    throw new Error("ONEDRIVE_USER_UPN no está configurado en .env.local");
  }

  const children = await graphGet<DriveChildren>(
    `${drivePath(`/${type}`)}:/children`
  );

  const folders = children.value.filter((f) => f.folder);

  const properties = await Promise.all(
    folders.map(async (folder) => {
      const info = await readPropertyInfo(type, folder.name);
      if (!info) return null;

      const images = await getPropertyImages(type, folder.name);

      return {
        ...info,
        type,
        images: images.length > 0 ? images : ["/images/placeholder-apt.jpg"],
      } satisfies Property;
    })
  );

  return properties.filter(Boolean) as Property[];
}

// Fetch featured properties across all types
export async function getFeaturedPropertiesFromOneDrive(): Promise<Property[]> {
  const [ventas, arriendos] = await Promise.all([
    getPropertiesFromOneDrive("venta"),
    getPropertiesFromOneDrive("arriendo"),
  ]);
  return [...ventas, ...arriendos].filter((p) => p.featured);
}
