import React from "react";
import { PageLayout } from "../components/PageLayout";
import { PatientsTable } from "../components/PatientsTable";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <PageLayout>
      <div className="flex justify-between w-full mb-3">
        <h1 className="text-4xl">Patients</h1>
        <Link className="btn btn-primary" to="/new">
          Add Patient
        </Link>
      </div>
      <PatientsTable />
    </PageLayout>
  );
};
