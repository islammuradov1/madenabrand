"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SheetProduct } from "@/lib/sheets";

export default function ProductCard({ product }: { product: SheetProduct }) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9945555514243";

  const name = product.name?.trim() || "Unnamed Product";
  const price = product.price?.toString().trim() || "0";

  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    product.whatsappMessage || `Salam, mən ${name} sifariş etmək istəyirəm.`
  )}`;

  return (
    <div className="group rounded-2xl bg-white flex flex-col border border-[#f3e5dc] border-[0.3px] shadow-[0_2px_10px_rgba(212,163,115,0.1)] transition-all duration-500 hover:shadow-[0_8px_20px_rgba(212,163,115,0.2)] hover:-translate-y-1">

      {/* Square Image */}
      <Link href={`/product/${product.id ?? name}`} className="block">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#fff9f7] to-[#fdf4ef]">
          <Image
            src={product.imageUrls[0]}
            alt={name}
            fill
            className="object-cover w-full h-full transition-transform duration-700 scale-95 group-hover:scale-105 group-hover:brightness-105"
            placeholder="blur"
            blurDataURL="/logo.png"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-3 flex-1 text-center">
        <h3 className="text-xl font-serif font-semibold text-[#1A1A1A] group-hover:text-[#C19A6B] transition-colors">
          {name}
        </h3>
        <p className="mt-1 text-lg font-medium text-[#b6895b]">{price} ₼</p>
      </div>

      {/* WhatsApp Button */}
      <Link
        href={href}
        target="_blank"
        className="mt-4 inline-flex items-center justify-center w-full px-10 py-3 bg-gradient-to-r from-[#d4a373] to-[#e0c097] hover:from-[#e0c097] hover:to-[#d4a373] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 rounded-none"
      >
        ✨ Sifariş et
      </Link>
    </div>
  );
}
