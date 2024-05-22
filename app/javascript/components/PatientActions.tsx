import React from "react";
import { DeletePatientButton } from "./DeletePatientButton";
import { EditPatientButton } from "./EditPatientButton";

export const PatientActions = ({
  id,
  hideEditBtn = false,
}: {
  id: number;
  hideEditBtn?: boolean;
}) => {
  return (
    <div className="flex gap-1">
      {!hideEditBtn && <EditPatientButton id={id} />}
      <DeletePatientButton id={id} />
    </div>
  );
};
