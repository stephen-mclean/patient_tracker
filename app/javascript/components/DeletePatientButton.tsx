import React from "react";
import { useDeletePatient } from "../hooks/useDeletePatient";
import classNames from "classnames";

export const DeletePatientButton = ({ id }: { id: number }) => {
  const { mutateAsync, isPending } = useDeletePatient();

  const loader = isPending ? (
    <span className="loading loading-spinner"></span>
  ) : null;

  const handleClick = () => {
    mutateAsync(id);
  };

  return (
    <button
      className={classNames("btn btn-error btn-xs", {
        "btn-disabled": isPending,
      })}
      onClick={handleClick}
    >
      {loader}
      Delete
    </button>
  );
};
