"use client";
import { useEffect, useState } from "react";
import { getPacientes } from "../services/pacienteService";
import Link from "next/link";

export default function Home() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    getPacientes()
      .then((data) => setPacientes(data))
      .catch((err) => console.error("Error al obtener pacientes:", err));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Listado de Pacientes</h1>

      <Link
        href="/pacientes/nuevo"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 inline-block mb-4"
      >
        ➕ Nuevo Paciente
      </Link>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Apellido</th>
            <th className="border p-2">DNI</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.nombre}</td>
              <td className="border p-2">{p.apellido}</td>
              <td className="border p-2">{p.dni}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
