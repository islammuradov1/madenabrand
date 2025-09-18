"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  productName: string;
  autoPlay?: boolean;
  interval?: number; // ms
}

export default function ImageSlider({
  images,
  productName,
  autoPlay = true,
  interval = 4000,
}: Props) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-center overflow-hidden rounded-2xl shadow-lg group">
      {/* Animated Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[current]}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${productName} image ${current + 1}`}
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
            onClick={prevSlide}
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
            onClick={nextSlide}
          >
            ›
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 flex gap-2 justify-center w-full">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to image ${index + 1}`}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
