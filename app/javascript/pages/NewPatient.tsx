import React from "react";
import { PageLayout } from "../components/PageLayout";
import { NewPatientForm } from "../components/NewPatientForm";
import { useNavigate } from "react-router-dom";

export const NewPatient = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/");
  };

  return (
    <PageLayout>
      <div className="mb-3">
        <h1 className="text-4xl">New Patient</h1>
      </div>
      <NewPatientForm onSuccess={handleSuccess} />
    </PageLayout>
  );
};
