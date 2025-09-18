import React from "react";
import { getProductsFromSheet, SheetProduct } from "@/lib/sheets";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

/**
 * Helper: Get single product by ID
 */
async function getProductById(id: string) {
  const products: SheetProduct[] = await getProductsFromSheet();
  const product = products.find((p) => p.id === id);
  return { product, products };
}

/**
 * Page: Product Details + Similar Products
 */
export default async function ProductPage({ params }: { params: { id: string } }) {
  const { product, products } = await getProductById(params.id);

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

  // Pick random 3 similar products
  const similarProducts = products
    .filter((p) => p.id !== product.id)
    .sort(() => Math.random() - 0.5) // shuffle
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#d4a373]">Ana Səhifə</Link>
        <span className="mx-2">›</span>
        <Link href="/#products" className="hover:text-[#d4a373]">Məhsullar</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.imageUrl || "/logo.png"}
            alt={product.name || "Product image"}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-serif font-semibold text-[#1A1A1A] leading-tight">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl text-[#b6895b] font-medium">
            {product.price} ₼
          </p>

          <Link
            href={`https://wa.me/${
              process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+994993419998"
            }?text=${encodeURIComponent(
              product.whatsappMessage ||
                `Salam, mən ${product.name} sifariş etmək istəyirəm.`
            )}`}
            target="_blank"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-gradient-to-r from-[#d4a373] to-[#e0c097] hover:from-[#e0c097] hover:to-[#d4a373] text-white text-lg font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500"
          >
            ✨ WhatsApp ilə sifariş et
          </Link>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-3xl font-serif font-semibold mb-10 text-[#1A1A1A]">
            Oxşar məhsullar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {similarProducts.map((sp) => (
              <ProductCard key={sp.id} product={sp} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
