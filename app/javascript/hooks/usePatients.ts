import { useQuery } from "@tanstack/react-query";
import { isPatient } from "../types/patients";
import { DEFAULT_PAGE_SIZE } from "../constants";

const getPatients = async (page = 0, limit = DEFAULT_PAGE_SIZE, query = "") => {
  const baseUrl = query ? `/api/v1/patients/search` : "/api/v1/patients";
  const params = query
    ? new URLSearchParams({
        page: page.toString(),
        per_page: limit.toString(),
        query,
      })
    : new URLSearchParams({
        page: page.toString(),
        per_page: limit.toString(),
      });
  const response = await fetch(`${baseUrl}?${params.toString()}`);
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

export const usePatients = (
  page = 0,
  limit = DEFAULT_PAGE_SIZE,
  query = ""
) => {
  return useQuery({
    queryKey: ["patients", page, limit, query],
    queryFn: () => getPatients(page, limit, query),
  });
};
