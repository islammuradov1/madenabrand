// app/api/products/route.ts
import { NextResponse } from "next/server";
import { getProductsFromSheet, SheetProduct } from "@/lib/sheets";

export async function GET() {
  try {
    const products: SheetProduct[] = await getProductsFromSheet();

    // Make sure each product has `imageUrls` as an array
    const normalized = products.map((p) => ({
      ...p,
      imageUrls: p.imageUrls || (p.imageUrl ? [p.imageUrl] : []),
    }));

    return NextResponse.json(normalized);
  } catch (err) {
    console.error("❌ Failed to fetch products:", err);

    const fallback: SheetProduct[] = [
      {
        id: "MB-001",
        name: "Classic Leather Tote",
        price: "120",
        imageUrls: ["/logo.png"], // ✅ changed to array
        whatsappMessage: "Salam, mən Classic Leather Tote sifariş etmək istəyirəm.",
      },
      {
        id: "MB-002",
        name: "Elegant Shoulder Bag",
        price: "150",
        imageUrls: ["/logo.png"], // ✅ changed to array
        whatsappMessage: "Salam, mən Elegant Shoulder Bag sifariş etmək istəyirəm.",
      },
    ];

    return NextResponse.json(fallback, { status: 200 });
  }
}
