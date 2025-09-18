// app/product/[id]/page.tsx
import React from "react";
import { getProductsFromSheet, SheetProduct } from "@/lib/sheets";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ImageSlider from "./ImageSlider"; // Client Component

// Fetch product by ID
async function getProductById(
  id: string
): Promise<{ product?: SheetProduct; products: SheetProduct[] }> {
  const products: SheetProduct[] = await getProductsFromSheet();

  // Ensure every product has imageUrls for slider
  const normalized = products.map((p) => ({
    ...p,
    imageUrls: p.imageUrls || (p.imageUrl ? [p.imageUrl] : []),
  }));

  const product = normalized.find((p) => p.id === id);
  return { product, products: normalized };
}

interface Props {
  params: Promise<{ id: string }>; // ✅ params is now a Promise in Next.js 15
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params; // ✅ unwrap the promise
  const { product, products } = await getProductById(id);

  if (!product) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-3xl font-bold text-red-600">Məhsul tapılmadı ❌</h1>
        <p className="mt-4 text-lg text-gray-600">
          Axtardığınız məhsul mövcud deyil.
          <Link href="/" className="text-[#d4a373] hover:underline ml-1">
            Bütün məhsullara baxın →
          </Link>
        </p>
      </div>
    );
  }

  // Random 3 similar products
  const similarProducts = products
    .filter((p) => p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#d4a373]">Ana Səhifə</Link>
        <span className="mx-2">›</span>
        <Link href="/products" className="hover:text-[#d4a373]">Məhsullar</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      {/* Product Images + Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Slider */}
        <ImageSlider images={product.imageUrls} productName={product.name} />

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-serif font-semibold text-[#1A1A1A] leading-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-xl text-[#b6895b] font-medium">{product.price} ₼</p>

          <Link
            href={`https://wa.me/${
              process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+994993419998"
            }?text=${encodeURIComponent(
              product.whatsappMessage || `Salam, mən ${product.name} sifariş etmək istəyirəm.`
            )}`}
            target="_blank"
            className="mt-6 inline-flex items-center justify-center w-full px-10 py-3 bg-gradient-to-r from-[#d4a373] to-[#e0c097] hover:from-[#e0c097] hover:to-[#d4a373] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 rounded-none"
          >
            ✨ WhatsApp ilə sifariş et
          </Link>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-serif font-semibold mb-10 text-[#1A1A1A]">
            Oxşar məhsullar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {similarProducts.map((sp) => (
              <ProductCard key={sp.id} product={sp} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
