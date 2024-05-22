import { useMutation, useQueryClient } from "@tanstack/react-query";

const deletePatient = async (id: number) => {
  const response = await fetch(`/api/v1/patients/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete patient");
  }
};

export const useDeletePatient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePatient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patients"] });
    },
  });
};
