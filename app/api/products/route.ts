// app/api/products/route.ts
import { NextResponse } from "next/server";
import { getProductsFromSheet, SheetProduct } from "@/lib/sheets";

export async function GET() {
  try {
    const products: SheetProduct[] = await getProductsFromSheet();
    return NextResponse.json(products);
  } catch (err) {
    console.error("❌ Failed to fetch products:", err);

    // Fallback sample products (safe for UI testing)
    const fallback: SheetProduct[] = [
      {
        id: "MB-001",
        name: "Classic Leather Tote",
        price: "120",
        imageUrl: "/logo.png",
        whatsappMessage: "Salam, mən Classic Leather Tote sifariş etmək istəyirəm.",
      },
      {
        id: "MB-002",
        name: "Elegant Shoulder Bag",
        price: "150",
        imageUrl: "/logo.png",
        whatsappMessage: "Salam, mən Elegant Shoulder Bag sifariş etmək istəyirəm.",
      },
    ];

    return NextResponse.json(fallback, { status: 200 });
  }
}
