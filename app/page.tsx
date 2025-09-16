"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

type Product = {
  id?: string;
  name: string;
  price: string;
  imageUrl?: string;
  whatsappMessage?: string;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        // Take latest 3 products (assuming last items are newest)
        const latest3 = data.slice(-3).reverse(); 
        setProducts(latest3);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-center mt-20 text-gray-600">Yüklənir...</p>;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff9f8] via-[#fdfbf9] to-[#faf7f3] text-gray-800 font-sans relative overflow-hidden">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="relative py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-6xl font-serif tracking-wide bg-gradient-to-r from-[#d4a373] to-[#e7bfa5] text-transparent bg-clip-text drop-shadow-sm">
            Zəriflik və Keyfiyyət
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Hər detalda incəlik — hər çantada sənət.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white/70 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-3 text-[#1A1A1A]">
            Yeni kolleksiya
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Keyfiyyətli və zərif çantalar — gündəlik və xüsusi hallar üçün.
          </p>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((p, idx) => (
                <ProductCard
                  key={p.id ?? idx}
                  product={{
                    id: p.id ?? `product-${idx}`,
                    name: p.name || "Məhsul adı yoxdur",
                    price: p.price || "0",
                    imageUrl: p.imageUrl || "/logo.png",
                    whatsappMessage:
                      p.whatsappMessage ||
                      `Salam, bu məhsulu sifariş etmək istəyirəm: ${p.name || "Məhsul"}`,
                  }}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-10 text-lg">Heç bir məhsul tapılmadı.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f0e4d8] py-10 mt-24 bg-[#fffaf7] relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-serif tracking-wide text-[#1A1A1A]">
            MADENA BRAND
          </span>{" "}
          — Bütün hüquqlar qorunur. <br />
          Instagram:{" "}
          <a
            href="https://instagram.com/madenabrand"
            className="hover:text-[#C19A6B]"
          >
            @madenabrand
          </a>
        </div>
      </footer>
    </main>
  );
}
