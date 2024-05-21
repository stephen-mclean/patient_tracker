import React from "react";
import { Nav } from "../components/Nav";
import { PageLayout } from "../components/PageLayout";

export const Home = () => (
  <PageLayout>
    <div className="flex justify-between w-full">
      <h1 className="text-4xl">Patients</h1>
      <button className="btn btn-primary">Add Patient</button>
    </div>
  </PageLayout>
);
