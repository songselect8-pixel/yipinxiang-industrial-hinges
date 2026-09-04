// Client-side preview limits, not manufacturing specifications or an upload service.
export const drawingFileExtensions = ["pdf", "dxf", "dwg", "step", "stp", "iges", "igs", "png", "jpg", "jpeg"] as const;
export const drawingFileAccept = drawingFileExtensions.map((extension) => `.${extension}`).join(",");
export const maxDrawingFileBytes = 10 * 1024 * 1024;

export function validateDrawingFile(file: { name: string; size: number } | null): string | null {
  if (!file) return null;
  const extension = file.name.split(".").at(-1)?.toLowerCase();
  if (!drawingFileExtensions.some((allowed) => allowed === extension)) return "Choose a PDF, CAD drawing (DXF, DWG, STEP or IGES), JPG or PNG file.";
  if (!Number.isFinite(file.size) || file.size <= 0) return "This file is empty. Please choose a drawing with content.";
  if (file.size > maxDrawingFileBytes) return "Choose a file no larger than 10 MB for this preview.";
  return null;
}
