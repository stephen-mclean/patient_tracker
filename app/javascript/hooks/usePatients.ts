import { useQuery } from "@tanstack/react-query";
import { isPatient } from "../types/patients";
import { DEFAULT_PAGE_SIZE } from "../constants";

const getPatients = async (page = 0, limit = DEFAULT_PAGE_SIZE) => {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: limit.toString(),
  });
  const response = await fetch(`/api/v1/patients?${params.toString()}`);
  const data = await response.json();

  const patients = data.patients;
  const total = data.total;

  if (!Array.isArray(patients) || typeof total !== "number") {
    throw new Error("Failed to retrieve patients");
  }

  const mappedPatients = patients.map((patient) => {
    if (isPatient(patient)) {
      return patient;
    } else {
      throw new Error("Invalid patient data");
    }
  });

  return { patients: mappedPatients, total };
};

export const usePatients = (page = 0, limit = DEFAULT_PAGE_SIZE) => {
  return useQuery({
    queryKey: ["patients", page, limit],
    queryFn: () => getPatients(page, limit),
  });
};
