import axios from "axios";

const API_URL = "http://localhost:5054/api/Pacientes";

export const getPacientes = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const crearPaciente = async (paciente: any) => {
  await axios.post(API_URL, paciente);
};

export const eliminarPaciente = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const obtenerPaciente = async (id: string) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const actualizarPaciente = async (id: string, paciente: any) => {
  await axios.put(`${API_URL}/${id}`, paciente);
};
