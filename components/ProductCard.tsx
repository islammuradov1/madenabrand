import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SheetProduct } from "@/lib/sheets";

export default function ProductCard({ product }: { product: SheetProduct }) {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9945555514243";

  const whatsappText =
    product.whatsappMessage && product.whatsappMessage.length > 0
      ? product.whatsappMessage
      : `Salam, mən ${product.name} (ID: ${
          product.id ?? product.name
        }) sifariş etmək istəyirəm. Qiymət: ${product.price} ₼.`;

  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
<div className="group rounded-3xl bg-white p-6 flex flex-col border border-[#f3e5dc] border-[0.5px] shadow-[0_4px_15px_rgba(212,163,115,0.1)] transition-all duration-500 hover:shadow-[0_8px_25px_rgba(212,163,115,0.2)] hover:-translate-y-2">

      {/* 🖼️ Product Image */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-[#fff9f7] to-[#fdf4ef]">
        <Image
          src={product.imageUrl || "/logo.svg"}
          alt={product.name}
          width={700}
          height={700}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:brightness-105"
        />
        {/* Subtle shimmer overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-700 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_70%)]"></div>
      </div>

      {/* 🏷️ Product Info */}
      <div className="mt-5 flex-1 text-center">
        <h3 className="text-2xl font-serif font-semibold text-[#1A1A1A] group-hover:text-[#C19A6B] transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-lg font-medium text-[#b6895b]">
          {product.price} ₼
        </p>
      </div>

      {/* 📲 WhatsApp Button */}
      <Link
        href={href}
        target="_blank"
        className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#d4a373] to-[#e0c097] hover:from-[#e0c097] hover:to-[#d4a373] text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
      >
        ✨ Sifariş et
      </Link>
    </div>
  );
}
