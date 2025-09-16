"use client";
import Link from "next/link";
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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(search.toLowerCase());
    const priceNum = parseFloat(p.price);
    const matchesMin = minPrice === "" || priceNum >= minPrice;
    const matchesMax = maxPrice === "" || priceNum <= maxPrice;
    return matchesName && matchesMin && matchesMax;
  });

  if (loading) return <p className="text-center mt-20">Yüklənir...</p>;

  return (
    <main className="min-h-screen bg-[#fff9f8] text-gray-800 font-sans relative overflow-hidden">
      {/* Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#f2e4da]">
  <Link href="/" className="flex items-center gap-4">
    <Image src="/logo.png" alt="Madena Brand" width={48} height={48} />
    <div>
      <h1 className="text-2xl sm:text-3xl font-serif tracking-wide text-[#1A1A1A]">
        MADENA BRAND
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 italic">
        Premium bags — Azerbaijan
      </p>
    </div>
  </Link>
</header>

      {/* Filters */}
      <section className="py-12 sm:py-16 bg-white/70 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
            <input
              type="text"
              placeholder="Məhsul adı ilə axtar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B] w-full sm:w-1/3 text-sm sm:text-base"
            />
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="number"
                placeholder="Min qiymət"
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(e.target.value === "" ? "" : parseFloat(e.target.value))
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B] w-full text-sm sm:text-base"
              />
              <input
                type="number"
                placeholder="Max qiymət"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(e.target.value === "" ? "" : parseFloat(e.target.value))
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B] w-full text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col items-center transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full aspect-square sm:aspect-[4/3] relative rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={p.imageUrl || "/logo.png"}
                      alt={p.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-3 text-sm sm:text-base font-semibold text-[#1A1A1A] text-center">
                    {p.name}
                  </h3>
                  <p className="text-[#C19A6B] font-medium mt-1">{p.price} AZN</p>
<a
  href={`https://wa.me/9945555514243?text=${encodeURIComponent(
    p.whatsappMessage || ""
  )}`}
  className="mt-2 mb-2 w-full block px-4 py-3 text-white bg-[#C19A6B] rounded-none text-sm font-semibold shadow hover:scale-105 hover:shadow-lg transition-all text-center"
>
  Sifariş et
</a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">Heç bir məhsul tapılmadı.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f0e4d8] py-8 sm:py-10 mt-16 bg-[#fffaf7] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-serif tracking-wide text-[#1A1A1A]">MADENA BRAND</span> — Bütün hüquqlar qorunur. <br />
          Instagram:{" "}
          <a href="https://instagram.com/madenabrand" className="hover:text-[#C19A6B]">
            @madenabrand
          </a>
        </div>
      </footer>
    </main>
  );
}