"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Page404 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-white text-center space-y-6">
      {/* Logo central */}
      <Image
        src="/logoApp.png" // Ruta correcta a la imagen
        alt="Logo"
        width={400}
        height={400}
        className="object-contain animate-pulse"
      />

      {/* Mensaje de error */}
      <h1 className="text-6xl font-bold text-neonPink">404</h1>
      <p className="text-2xl mt-4">Parece que tu producto esta agotado</p>

      {/* Texto adicional */}
      <p className="text-xl mt-4">
        Tu pedido se perdio con el delivery
      </p>

      {/* Botón para regresar */}
      <button
        onClick={() => router.push("/")}
        className="mt-6 bg-neonPink text-black font-bold py-2 px-6 rounded-full hover:bg-transparent border-2 border-neonPink transition-colors"
      >
        Regresar al Hospital
      </button>
    </div>
  );
};

export default Page404;
