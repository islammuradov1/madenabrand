"use server";

import { google } from "googleapis";

export type SheetProduct = {
  id: string;
  name: string;
  price: string;
  imageUrls: string[];
  whatsappMessage: string;
};

const SHEET_ID = process.env.GOOGLE_SHEET_ID;

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
    console.warn("⚠️ Missing credentials, returning fallback product.");
    return [
      {
        id: "MB-001",
        name: "Classic Leather Tote",
        price: "120",
        imageUrls: ["/logo.png"],
        whatsappMessage: "Salam, mən Classic Leather Tote sifariş etmək istəyirəm.",
      },
    ];
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      ...serviceAccount,
      private_key: serviceAccount.private_key.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  try {
    const range = "'1 vərəq'!A2:E";
    const res = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range });
    const rows = res.data.values || [];
    const validRows = rows.filter((r) => r[0] && r[0].toString().trim() !== "");

    return validRows.map((r, idx): SheetProduct => {
      const id = r[0]?.toString().trim() || `auto-id-${idx}-${Date.now()}`;
      const name = r[1]?.toString().trim() || "Unnamed Product";
      const price = r[2]?.toString().trim() || "0";

      const imageUrls: string[] =
        r[3]
          ?.toString()
          .split(",")
          .map((url: string) => url.trim())
          .filter(Boolean) || ["/logo.png"];

      const whatsappMessage =
        r[4]?.toString().trim() || `Salam, mən ${name} (ID: ${id}) sifariş etmək istəyirəm.`;

      return { id, name, price, imageUrls, whatsappMessage };
    });
  } catch (err) {
    console.error("Error fetching products from Google Sheets:", err);
    return [
      {
        id: "MB-001",
        name: "Classic Leather Tote",
        price: "120",
        imageUrls: ["/logo.png"],
        whatsappMessage: "Salam, mən Classic Leather Tote sifariş etmək istəyirəm.",
      },
    ];
  }
}
