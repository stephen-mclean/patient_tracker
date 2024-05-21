import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => (
  <nav className="w-64 bg-primary text-white h-screen p-3 flex flex-col gap-3">
    <Link to="/" className="block text-white text-center text-2xl">
      Patient Tracker
    </Link>
    <div>
      <Link to="/" className="block">
        Patients
      </Link>
    </div>
  </nav>
);
