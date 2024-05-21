export type Patient = {
  id: number;
  first_name: string;
  last_name: string;
  dob: string;
  notes?: string;
  medications?: string;
  gender: "male" | "female";
  email: string;
};

export const isPatient = (data: any): data is Patient => {
  return (
    typeof data.id === "number" &&
    typeof data.first_name === "string" &&
    typeof data.last_name === "string" &&
    typeof data.dob === "string" &&
    (data.notes === null || typeof data.notes === "string") &&
    (data.medications === null || typeof data.medications === "string")
  );
};
