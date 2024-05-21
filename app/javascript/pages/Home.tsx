import React from "react";
import { PageLayout } from "../components/PageLayout";
import { useQuery } from "@tanstack/react-query";
import { PatientsTable } from "../components/PatientsTable";

export const Home = () => {
  const { data, isLoading } = useQuery({ queryKey: ["patients"] });

  return (
    <PageLayout>
      <div className="flex justify-between w-full mb-3">
        <h1 className="text-4xl">Patients</h1>
        <button className="btn btn-primary">Add Patient</button>
      </div>
      <PatientsTable />
    </PageLayout>
  );
};
