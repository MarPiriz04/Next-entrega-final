"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext"; // Asegúrate de que el contexto esté bien configurado

const Register = () => {
  const { registerUser } = useContext(AuthContext); // Desestructuración para obtener la función de registro
  const [form, setForm] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const router = useRouter();

  // Manejo del cambio en los inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      email: e.target.email.value,
      password: e.target.password.value,
      userName: e.target.userName.value,
    };
    try {
      await registerUser(values); // Enviar los valores al contexto para registrar al usuario
      router.push("/login"); // Redirigir a la página de login después del registro
      alert("Usuario registrado exitosamente!");
    } catch (error) {
      console.log(error.message); // Manejo de errores
      alert("Hubo un error al registrar el usuario");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pharmacy-light-green">
      <div className="bg-pharmacy-white shadow-lg rounded-lg p-8 w-full max-w-md border border-pharmacy-gray">
        <h1 className="text-3xl font-extrabold text-center text-pharmacy-green mb-6">
          Regístrate
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="userName"
              value={form.userName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-pharmacy-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-pharmacy-green text-gray-900 placeholder-gray-500"
              placeholder="Ingresa tu nombre"
            />
          </div>
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
              value={form.email}
              onChange={handleChange}
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
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-pharmacy-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-pharmacy-green text-gray-900 placeholder-gray-500"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pharmacy-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Regístrame
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
