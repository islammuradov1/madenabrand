// lib/sheets.ts
import { google } from "googleapis";

export interface SheetProduct {
  id: string;
  name: string;
  price: string;
  imageUrls: string[];
  whatsappMessage?: string;
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || "";
const SHEET_NAME = "Products";

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEYFILE, // e.g., madenabrend-472114-d2044b27edde.json
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function getProductsFromSheet(): Promise<SheetProduct[]> {
  if (!SPREADSHEET_ID) {
    console.warn("⚠️ GOOGLE_SHEET_ID not set in environment");
    return [];
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME,
    });

    const rows = response.data.values || [];

    if (rows.length < 2) return []; // no data

    const headers = rows[0];
    const dataRows = rows.slice(1);

    const products: SheetProduct[] = dataRows.map((row) => {
      const rowObj: Record<string, string> = {};
      headers.forEach((header, i) => {
        rowObj[header] = row[i] || "";
      });

      const rawImageUrls = rowObj["imageUrls"] || rowObj["imageUrl"];
      const imageUrls: string[] =
        rawImageUrls
          ?.toString()
          .split(",")
          .map((url: string) => url.trim())
          .filter(Boolean) || ["/logo.png"];

      const whatsappMessage =
        rowObj["whatsappMessage"] ||
        `Salam, mən ${rowObj["name"]} sifariş etmək istəyirəm.`;

      return {
        id: rowObj["id"] || crypto.randomUUID(),
        name: rowObj["name"] || "Unnamed Product",
        price: rowObj["price"] || "0",
        imageUrls,
        whatsappMessage,
      };
    });

    return products;
  } catch (err) {
    console.error("❌ Failed to fetch sheet data:", err);
    return [];
  }
}
