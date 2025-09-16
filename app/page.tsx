import React from "react";
import { getProductsFromSheet, SheetProduct } from "@/lib/sheets";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default async function HomePage() {
  let products: SheetProduct[] = [];

  try {
    const allProducts = await getProductsFromSheet();

    // Step 1: filter out rows missing essential info
    const validProducts = allProducts.filter(
      (p) =>
        (p.name?.trim() || p.id?.trim()) && // must have at least a name or id
        p.price?.toString().trim() &&
        p.imageUrl?.trim()
    );

    // Step 2: take the last 3 valid products (newest first)
    products = validProducts.length > 3
      ? validProducts.slice(-3).reverse()
      : validProducts.reverse();

  } catch (err) {
    console.error("Failed to fetch products from Google Sheets:", err);

    // fallback mock
    products = [
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff9f8] via-[#fdfbf9] to-[#faf7f3] text-gray-800 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#ffe6f0,_transparent_60%)] pointer-events-none"></div>

      <header className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex items-center justify-between border-b border-[#f2e4da]">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Madena Brand" width={64} height={64} />
          <div>
            <h1 className="text-3xl font-serif tracking-wide text-[#1A1A1A]">
              MADENA BRAND
            </h1>
            <p className="text-sm text-gray-500 italic">
              Premium bags — Azerbaijan
            </p>
          </div>
        </div>
      </header>

      <section className="relative py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-6xl font-serif tracking-wide bg-gradient-to-r from-[#d4a373] to-[#e7bfa5] text-transparent bg-clip-text drop-shadow-sm">
            Zəriflik və Keyfiyyət
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Hər detalda incəlik — hər çantada sənət.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="inline-block px-10 py-3 bg-gradient-to-r from-[#d4a373] to-[#e0c097] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              ✨ Kolleksiyanı kəşf et
            </a>
            <a
              href="/products"
              className="inline-block px-10 py-3 bg-gradient-to-r from-[#d4a373] to-[#e0c097] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              💎 Bütün məhsulları gör
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/70 backdrop-blur-sm relative z-10" id="products">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-3 text-[#1A1A1A]">
            Yeni kolleksiya
          </h2>
          <p className="text-gray-600 text-lg">
            Keyfiyyətli və zərif çantalar — gündəlik və xüsusi hallar üçün.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((p, idx) => (
              <ProductCard
                key={p.id ?? idx}
                product={{
                  ...p,
                  price: p.price || "0",
                  imageUrl: p.imageUrl || "/logo.png",
                  whatsappMessage:
                    p.whatsappMessage ||
                    `Salam, bu məhsulu sifariş etmək istəyirəm: ${p.name}`,
                }}
              />
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/products"
              className="inline-block px-10 py-3 bg-gradient-to-r from-[#d4a373] to-[#e0c097] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              💎 Bütün məhsulları gör
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#f0e4d8] py-10 mt-24 bg-[#fffaf7] relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-serif tracking-wide text-[#1A1A1A]">
            MADENA BRAND
          </span>{" "}
          — Bütün hüquqlar qorunur. <br />
          Instagram:{" "}
          <a href="https://instagram.com/madenabrand" className="hover:text-[#C19A6B]">
            @madenabrand
          </a>
        </div>
      </footer>
    </main>
  );
}