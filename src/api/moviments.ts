import { TypeMovimentEnum } from "../models/moviments";
import api from "./api";

export async function findAllMoviments() {
  const moviments = await api.get("/moviments");
  return moviments.data;
}

export async function createMoviment(
  type: string | undefined,
  value: string | undefined,
  description: string | undefined,
) {
  const moviments = await api.post("/moviments", { type, value, description });
  return moviments.data;
}
