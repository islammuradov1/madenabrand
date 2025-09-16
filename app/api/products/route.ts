import { NextRequest, NextResponse } from "next/server";
import { getProductsFromSheet, SheetProduct } from "@/lib/sheets";

export async function GET() {
  let products: SheetProduct[] = [];
  try {
    products = await getProductsFromSheet();
  } catch (err) {
    console.error(err);
    products = [
      { id: "MB-001", name: "Classic Leather Tote", price: "120", imageUrl: "/logo.png" },
      { id: "MB-002", name: "Elegant Shoulder Bag", price: "150", imageUrl: "/logo.png" },
    ];
  }

  return NextResponse.json(products);
}
