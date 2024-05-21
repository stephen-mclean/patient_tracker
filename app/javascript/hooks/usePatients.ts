import { useQuery } from "@tanstack/react-query";
import { isPatient } from "../types/patients";

const getPatients = async (page = 0, limit = 10) => {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: limit.toString(),
  });
  const response = await fetch(`/api/v1/patients?${params.toString()}`);
  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Failed to retrieve patients");
  }

  return data.map((patient) => {
    if (isPatient(patient)) {
      return patient;
    } else {
      throw new Error("Invalid patient data");
    }
  });
};

export const usePatients = (page = 0, limit = 10) => {
  return useQuery({
    queryKey: ["patients", page, limit],
    queryFn: () => getPatients(page, limit),
  });
};
