// lib/serverSheets.ts
import { getProductsFromSheet, SheetProduct } from "./sheets";

// Server-side fetch only
export async function fetchProducts(): Promise<SheetProduct[]> {
  return await getProductsFromSheet();
}
