import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PatientInputs } from "../types/patients";

const createPatient = async (patient: PatientInputs) => {
  const payload = {
    patient: patient,
  };
  const response = await fetch("/api/v1/patients", {
    method: "POST",
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

export const useCreatePatient = (onSuccess = () => {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPatient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patients"] });
      onSuccess();
    },
  });
};
