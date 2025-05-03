"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark text-white text-center space-y-6">
      {/* Logo central */}
      <Image
        src="/logoApp.png" // Ruta correcta a la imagen
        alt="Logo"
        width={400}
        height={400}
        className="object-contain animate-pulse"
      />

      {/* Mensaje de error */}
      <h1 className="text-6xl font-bold text-electric">404</h1>
      <p className="text-2xl mt-4">¡Tu producto no esta disponible</p>

      {/* Texto adicional */}
      <p className="text-xl mt-4">
        Tu medicamento se lo quedo el delivery
      </p>

      {/* Botón para regresar */}
      <button
        onClick={() => router.push("/")}
        className="mt-6 bg-electric text-black font-bold py-2 px-6 rounded-full hover:bg-transparent border-2 border-electric transition-colors"
      >
        Regresar al Hospital
      </button>
    </div>
  );
};

export default NotFoundPage;
