"use client";
import { useEffect, useState } from "react";
import { getPacientes, eliminarPaciente } from "@/services/pacienteService";
import { useRouter } from "next/navigation";

export default function ListadoPacientes() {
  const [pacientes, setPacientes] = useState([]);
  const router = useRouter();

  const cargarPacientes = async () => {
    try {
      const data = await getPacientes();
      setPacientes(data);
    } catch (err) {
      console.error("Error al obtener pacientes:", err);
    }
  };

  useEffect(() => {
    cargarPacientes();
  }, []);

  const handleEliminar = async (id: string) => {
    if (confirm("¿Estás seguro que querés eliminar este paciente?")) {
      try {
        await eliminarPaciente(id);
        cargarPacientes();
      } catch (err) {
        console.error("Error al eliminar paciente:", err);
      }
    }
  };

  const handleEditar = (id: string) => {
    router.push(`/pacientes/editar/${id}`);
  };

  const handleCrear = () => {
    router.push("/pacientes/crear");
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Listado de Pacientes</h1>
      <button
        onClick={handleCrear}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        + Nuevo Paciente
      </button>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Apellido</th>
            <th className="border p-2">DNI</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p: any) => (
            <tr key={p.id}>
              <td className="border p-2">{p.nombre}</td>
              <td className="border p-2">{p.apellido}</td>
              <td className="border p-2">{p.dni}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEditar(p.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleEliminar(p.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
