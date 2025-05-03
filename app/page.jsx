"use client";
import { useState } from 'react';
import Link from "next/link";
import UploadProductsButton from "../components/common/UploadProductsButton/UploadProductsButton";

export default function Home() {
  const [uploadedProducts, setUploadedProducts] = useState([]);

  return (
    <>
      <section className="hero bg-gradient-to-r from-electric via-neonPink to-blue-500 min-h-screen animate-fade-in text-white">
      <div className="hero-content flex-col lg:flex-row items-center space-y-6 lg:space-y-0">
        {/* Imagen de la tienda */}
        <img
          alt="Logo de Farmacia Veracierto"
          src="/logoApp.png" // Usando la imagen de la carpeta public
          className="w-80 max-w-sm rounded-lg shadow-neon transform transition-transform hover:scale-105"
        />

        {/* Contenido principal */}
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-4xl xl:text-7xl font-bold text-gradient bg-clip-text text-transparent">
            ¡Bienvenido a Farmacia Veracierto!
          </h1>
          <p className="py-4 xl:text-lg text-foregroundLight">
          Cuidá tu salud con una amplia selección de medicamentos, suplementos y productos de higiene para toda la familia. ¡Sentite bien, viví mejor!
          </p>

          {/* Botones para cada plataforma */}
          <div className="space-x-4">
            <Link
              href="/products/analgesicos"
              className="btn bg-neonPink text-white hover:bg-transparent border-2 border-neonPink transition-colors font-bold"
            >
              Analgesicos
            </Link>
            <Link
              href="/products/suplementos"
              className="btn bg-neonPink text-white hover:bg-transparent border-2 border-neonPink transition-colors font-bold"
            >
              Suplementos
            </Link>
            <Link
              href="/products/higiene"
              className="btn bg-neonPink text-white hover:bg-transparent border-2 border-neonPink transition-colors font-bold"
            >
              Higiene
            </Link>
            <Link
              href="/products/anticonceptivos"
              className="btn bg-neonPink text-white hover:bg-transparent border-2 border-neonPink transition-colors font-bold"
            >
              anticonceptivos
            </Link>
          </div>
          {/* Add the upload button */}
          <div className="mt-4">
            <UploadProductsButton setUploadedProducts={setUploadedProducts} />
          </div>
        </div>
      </div>

      {/* Sección de trailer o video */}
    </section>

    {uploadedProducts.length > 0 && (
      <section className="container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Productos Cargados</h2>
        {Object.entries(uploadedProducts.reduce((acc, product) => {
          acc[product.category] = acc[product.category] || [];
          acc[product.category].push(product);
          return acc;
        }, {})).map(([category, products]) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 capitalize">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <div key={product.id} className="border rounded-lg p-4 shadow-md">
                  <h4 className="text-xl font-bold">{product.title}</h4>
                  <p className="text-gray-700">{product.description}</p>
                  <p className="text-green-600 font-semibold">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    )}
    </>
  );
}
