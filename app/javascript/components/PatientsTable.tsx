import React, { useState } from "react";
import classNames from "classnames";
import { usePatients } from "../hooks/usePatients";
import { DEFAULT_PAGE_SIZE } from "../constants";
import { DeletePatientButton } from "./DeletePatientButton";
import { PatientActions } from "./PatientActions";

export const PatientsTable = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const { isLoading, data } = usePatients(page, DEFAULT_PAGE_SIZE, query);
  const totalPages = data?.total
    ? Math.ceil(data.total / DEFAULT_PAGE_SIZE)
    : 0;
  const pages = Array.from(Array(totalPages));

  const loader = (
    <div className="flex justify-center">
      <span className="loading loading-ball loading-md"></span>
    </div>
  );

  const pagination =
    pages && pages.length ? (
      <div className="join flex justify-center">
        {pages.map((_, index) => (
          <button
            onClick={() => setPage(index)}
            className={classNames("join-item btn btn-xs", {
              "btn-active": page === index,
            })}
          >
            {index + 1}
          </button>
        ))}
      </div>
    ) : null;

  const table =
    data && data.patients.length ? (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.patients.map((patient) => (
            <tr key={patient.id}>
              <td>
                {patient.first_name} {patient.last_name}
              </td>
              <td>{new Date(patient.dob).toLocaleDateString()}</td>
              <td>{patient.gender}</td>
              <td>{patient.email}</td>
              <td>
                <PatientActions id={patient.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <div>No patients to show.</div>
    );

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Search patients"
        className="input input-sm input-bordered w-full max-w-xs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading ? loader : null}
      {!isLoading ? table : null}
      {!isLoading ? pagination : null}
    </div>
  );
};
