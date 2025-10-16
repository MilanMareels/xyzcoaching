"use client";
import { useState, useEffect } from "react";
import HeaderCalendyButton from "./ui/HeaderCalendyButton";

export default function Header() {
  const images = ["/c-1.webp", "/c-2.webp", "/c-3.webp", "/c-4.webp", "/c-5.webp", "/c-6.webp"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // elke 3 sec
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Achtergrondbeelden */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      {/* Donkere overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-600/80 to-transparent"></div>

      {/* Tekst en knoppen */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-center">Jou Persoonlijke</h1>
          <h1 className="text-5xl md:text-6xl font-bold text-[#DE5438] mb-6 leading-tight text-center">Sport Coach</h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed text-center">Zwemmen • Fietsen • Lopen - Professionele begeleiding voor alle niveaus</p>
          <HeaderCalendyButton />
        </div>
      </div>
    </section>
  );
}
