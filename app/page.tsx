import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/airplane2.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />

      {/* Main content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
          Bienvenido a
        </h1>

        <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#93c5fd] via-white to-[#60a5fa] text-transparent bg-clip-text mb-8">
          GLOBETROTTER
        </h2>

        <p className="text-lg text-gray-100 mb-10 drop-shadow-sm">
          Descubre el mundo con nosotros. Vuela fácil, seguro y a tu medida.
        </p>

        <Link
          href="/form"
          className="inline-block px-8 py-4 bg-white text-[#1e3a8a] text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Comenzar Reservación
        </Link>
      </div>
    </main>
  );
}
