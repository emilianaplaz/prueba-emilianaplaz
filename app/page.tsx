import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main>
    <h1>Bienvenido a</h1>
    <h2>GLOBETROTTER</h2>
    <Link href="/form">Reservar</Link>
   </main>
  );
}
