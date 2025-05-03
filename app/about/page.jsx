"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <section
        className="hero min-h-screen bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dpisx0ysb/image/upload/v1725830829/videojuegos_bg_mhv5py.svg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            {/* Logo de la tienda */}
            <img
              src="/logoApp.png" // Imagen del logo almacenado en la carpeta public
              alt="Logo Farmacia Veracierto"
              className="w-32 mx-auto mb-6"
            />
            <h1 className="mb-5 text-5xl xl:text-7xl font-bold">
              ¡Bienvenido a Farmacia Veracierto!
            </h1>
            <p className="mb-5 xl:text-lg">
            En Farmacia Veracierto, nos dedicamos a cuidar tu salud y bienestar. Encontrá una amplia variedad de medicamentos, suplementos, productos de higiene personal y anticonceptivos. ¡Calidad, confianza y atención personalizada en un solo lugar!
            </p>

            {/* Botones para cada plataforma */}
            <div className="space-x-4">
              <Link
                href="/products/analgesicos"
                className="btn bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300"
              >
                Analgesicos
              </Link>
              <Link
                href="/products/suplementos"
                className="btn bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300"
              >
                Suplementos
              </Link>
              <Link
                href="/products/higiene"
                className="btn bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300"
              >
                Higiene
              </Link>
              <Link
                href="/products/anticonceptivos"
                className="btn bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300"
              >
                anticonceptivos
              </Link>
            </div>

            {/* Botón para volver */}
            <button
              className="btn btn-secondary mt-4"
              onClick={() => router.back()}
            >
              Volver
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
