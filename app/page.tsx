import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/airplane.mp4" type="video/mp4" />
      </video>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-6 md:px-8 text-center text-white max-w-7xl mx-auto">
        <h2
          className="
            select-none font-extrabold text-yellow-400 tracking-widest leading-tight
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl
            max-w-full
            px-2
          "
        >
          {/* En mobile separar en dos líneas */}
          <span className="block sm:inline">GLOBE</span>
          <span className="block sm:inline">TROTTER</span>
        </h2>

        <Link href="/form" passHref>
          <button
            className="
              mt-8 sm:mt-10 px-6 sm:px-8 md:px-10 py-3 sm:py-4
              bg-white/20
              backdrop-blur-lg
              border border-white/30
              rounded-full
              text-[#6698CC] font-extrabold text-base sm:text-lg tracking-wide
              shadow-lg shadow-white/20
              hover:bg-white/30
              transition duration-300 ease-in-out
              font-sans
              select-none
              max-w-xs sm:max-w-sm
              truncate
            "
          >
            Reserva tu próxima aventura
          </button>
        </Link>
      </div>
    </main>
  );
}





