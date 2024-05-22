import React from "react";
import { Link } from "react-router-dom";

export const EditPatientButton = ({ id }: { id: number }) => {
  return (
    <Link className="btn btn-xs" to={`/patients/${id}`}>
      Edit
    </Link>
  );
};
