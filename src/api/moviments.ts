import { TypeMovimentEnum } from "../models/moviments";
import api from "./api";

export async function findAllMoviments() {
  const moviments = await api.get("/moviments");
  return moviments.data;
}

export async function createMoviment(
  type: TypeMovimentEnum,
  value: string,
  description: string
) {
  console.log(
    "chegou createMoviment com type, value, description:::",
    type,
    value,
    description
  );
  const moviments = await api.post("/moviments", { type, value, description });
  return moviments.data;
}
