import React, { useState } from "react";
import classNames from "classnames";
import { usePatients } from "../hooks/usePatients";
import { DEFAULT_PAGE_SIZE } from "../constants";

export const PatientsTable = () => {
  const [page, setPage] = useState(0);
  const { isLoading, data } = usePatients(page);
  const totalPages = data?.total
    ? Math.ceil(data.total / DEFAULT_PAGE_SIZE)
    : 0;
  const pages = Array.from(Array(totalPages));

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-ball loading-md"></span>
      </div>
    );
  }

  if (!data || !data.patients.length) {
    return <div>No patients to show.</div>;
  }

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

  return (
    <>
      <table className="table mb-2">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
          {data.patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.first_name}</td>
              <td>{patient.last_name}</td>
              <td>{patient.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {pagination}
    </>
  );
};
