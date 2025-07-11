import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black font-sans">
      {/* Imagen de fondo */}
      <img
        src="/img/airplane.png"
        alt="Airplane background"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Contenido alineado a la izquierda */}
      <div className="relative z-10 flex items-center justify-start h-screen px-6 sm:px-12 md:px-20 text-white">
        <div className="max-w-xl space-y-6">
          <h2 className="text-[#FFD700] font-extrabold tracking-widest leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl select-none">
            <span className="block">GLOBE</span>
            <span className="block">TROTTER</span>
          </h2>

          <p className="text-[#FFD700] text-xl sm:text-2xl font-medium tracking-wide">
            El mundo te espera, nosotros te llevamos
          </p>

          <Link href="/form" passHref>
            <button
              className="
                mt-4 px-8 py-4
                bg-[#FFD700]/90
                backdrop-blur-lg
                border border-[#FFD700]/70
                rounded-full
                text-[#1A2B44] font-extrabold text-lg tracking-wide
                shadow-lg shadow-[#FFD700]/30
                hover:bg-[#FFD700]
                transition duration-300 ease-in-out
                cursor-pointer
              "
            >
              Reserva tu próxima aventura
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}






