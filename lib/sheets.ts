// lib/sheets.ts
import { google } from "googleapis";

export type SheetProduct = {
  id: string;              // required
  name: string;
  price: string;
  imageUrl: string;
  whatsappMessage: string;
};

// Google Sheet ID
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

// Decode the Base64 JSON from env
const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64
  ? JSON.parse(
      Buffer.from(
        process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64,
        "base64"
      ).toString("utf8")
    )
  : null;

export async function getProductsFromSheet(): Promise<SheetProduct[]> {
  if (!SHEET_ID || !serviceAccount) {
    console.warn(
      "⚠️ Missing GOOGLE_SHEET_ID or service account credentials. Returning sample product."
    );
    return [
      {
        id: "MB-001",
        name: "Classic Leather Tote",
        price: "120",
        imageUrl: "/logo.png",
        whatsappMessage:
          "Salam, mən Classic Leather Tote sifariş etmək istəyirəm.",
      },
    ];
  }

  // Google Auth
  const auth = new google.auth.GoogleAuth({
    credentials: {
      ...serviceAccount,
      private_key: serviceAccount.private_key.replace(/\\n/g, "\n"), // fix PEM format
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Expected columns: A–E → (ID, Name, Price, Image, WhatsApp Msg)
  const range = "'1 vərəq'!A2:E";

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range,
  });

  const rows = res.data.values || [];

  // Filter out rows where ID is missing (invalid product)
  const validRows = rows.filter(
    (r) => r[0] && r[0].toString().trim() !== ""
  );

  return validRows.map((r, idx): SheetProduct => {
    const id = r[0]?.toString().trim();
    const name = r[1]?.toString().trim() || "Unnamed Product";
    const price = r[2]?.toString().trim() || "0";
    const imageUrl = r[3]?.toString().trim() || "/logo.png";
    const whatsappMessage =
      r[4]?.toString().trim() ||
      `Salam, mən ${name} (ID: ${id}) sifariş etmək istəyirəm.`;

    return {
      id: id || `auto-id-${idx}-${Date.now()}`,
      name,
      price,
      imageUrl,
      whatsappMessage,
    };
  });
}
