import React, { useState } from "react";
import { usePatients } from "../hooks/usePatients";

export const PatientsTable = () => {
  const { isLoading, data } = usePatients();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-ball loading-md"></span>
      </div>
    );
  }

  if (!data) {
    return <div>No patients to show.</div>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date Of Birth</th>
        </tr>
      </thead>
      <tbody>
        {data.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.first_name}</td>
            <td>{patient.last_name}</td>
            <td>{patient.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
