import api from "./api";

export async function findAllMoviments() {
  const moviments = await api.get("/moviments");
  return moviments.data;
}
