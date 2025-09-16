import { google } from "googleapis";

export type SheetProduct = {
  id?: string;
  name: string;
  price: string;
  imageUrl?: string;
  whatsappMessage?: string;
};

// Google Sheet ID
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

// Decode the Base64 JSON from env
const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64
  ? JSON.parse(
      Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64, "base64").toString("utf8")
    )
  : null;

export async function getProductsFromSheet(): Promise<SheetProduct[]> {
  if (!SHEET_ID || !serviceAccount) {
    console.warn(
      "Missing GOOGLE_SHEET_ID or service account credentials. Returning sample product."
    );
    return [
      {
        id: "MB-001",
        name: "Classic Leather Tote",
        price: "120",
        imageUrl: "/logo.png",
        whatsappMessage: "Salam, mən Classic Leather Tote sifariş etmək istəyirəm.",
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

  const range = "'1 vərəq'!A2:E";

  const res = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range });
  const rows = res.data.values || [];

  // Filter out fully empty rows
  const nonEmptyRows = rows.filter(
    (r) => r.some((cell) => cell !== undefined && cell !== null && cell.toString().trim() !== "")
  );

  return nonEmptyRows.map((r) => ({
    id: r[0],
    name: r[1] || "",
    price: r[2] || "0",
    imageUrl: r[3] || "/logo.png",
    whatsappMessage: r[4] || "",
  }));
}
