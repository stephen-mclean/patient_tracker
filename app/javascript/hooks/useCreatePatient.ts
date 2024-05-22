import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PatientInputs } from "../types/patients";

const createOrModifyPatient = async (patient: PatientInputs, id?: number) => {
  const payload = {
    patient: patient,
  };
  const url = id ? `/api/v1/patients/${id}` : "/api/v1/patients";
  const method = id ? "PUT" : "POST";
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error("Failed to create patient");
};

export const useCreateOrModifyPatient = (onSuccess = () => {}, id?: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (patient: PatientInputs) => createOrModifyPatient(patient, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patients"] });
      onSuccess();
    },
  });
};
