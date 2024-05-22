import { useQuery } from "@tanstack/react-query";
import { isPatient } from "../types/patients";

const fetchPatient = async (id: number) => {
  const response = await fetch(`/api/v1/patients/${id}`);

  if (response.ok) {
    const data = await response.json();

    if (isPatient(data)) {
      return data;
    }
  }

  throw new Error("Failed to fetch patient");
};

export const usePatient = (id?: number) => {
  if (!id) {
    return null;
  }

  return useQuery({
    queryKey: ["patients", id],
    queryFn: () => fetchPatient(id),
  });
};
