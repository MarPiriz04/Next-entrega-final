"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext"; // Asegúrate de que el contexto está bien configurado
import { signInWithPopup } from "firebase/auth";
import { auth } from "../context/configFirebase"; // Asegúrate de que Firebase esté configurado correctamente
import Link from "next/link";

const LogIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, googleLogin, registerUser, loginUser } =
    useContext(AuthContext);

  const handleSubmitGoogle = async (e) => {
    e.preventDefault();
    const userCredential = await signInWithPopup(auth, email, password); // Asegúrate de pasar los parámetros correctos para el login con Google
    await googleLogin(userCredential); // Realiza el login con Google
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      router.push("/"); // Redirige al home después del login exitoso
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pharmacy-light-green">
      <div className="bg-pharmacy-white shadow-lg rounded-lg p-8 w-full max-w-md border border-pharmacy-gray">
        <h1 className="text-3xl font-extrabold text-center text-pharmacy-green mb-6">
          Iniciar Sesión
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-pharmacy-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-pharmacy-green text-gray-900 placeholder-gray-500"
              placeholder="Ingresa tu correo"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-pharmacy-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-pharmacy-green text-gray-900 placeholder-gray-500"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pharmacy-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-4">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-pharmacy-green hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
