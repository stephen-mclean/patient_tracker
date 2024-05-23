import React from "react";
import { PageLayout } from "../components/PageLayout";
import { PatientsTable } from "../components/PatientsTable";
import { useNavigate, useParams } from "react-router-dom";
import { usePatient } from "../hooks/usePatient";
import { PatientActions } from "../components/PatientActions";
import { PatientForm } from "../components/PatientForm";

export const ViewPatient = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const patientId = Number(id);
  const patient = usePatient(patientId);

  if (!patient) {
    return <PageLayout>Patient not found.</PageLayout>;
  }

  const loader = (
    <div className="flex justify-center">
      <span className="loading loading-ball loading-md"></span>
    </div>
  );

  const { data, isLoading } = patient;

  return (
    <PageLayout>
      <div className="flex justify-between w-full mb-3">
        <h1 className="text-4xl">Patient Details</h1>
      </div>
      {isLoading ? loader : null}
      {!isLoading && data ? (
        <PatientForm patient={data} onSuccess={() => navigate("/")} />
      ) : null}
    </PageLayout>
  );
};
