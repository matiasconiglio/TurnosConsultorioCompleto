"use client";
import { useState } from "react";
import { crearPaciente } from "@/services/pacienteService";
import { useRouter } from "next/navigation";

export default function CrearPaciente() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await crearPaciente({ nombre, apellido, dni });
      router.push("/pacientes");
    } catch (err) {
      console.error("Error al crear paciente:", err);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Crear Paciente</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          className="border p-2"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="DNI"
          className="border p-2"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Guardar
        </button>
      </form>
    </main>
  );
}
