import React, { PropsWithChildren } from "react";
import { Nav } from "./Nav";

export const PageLayout = ({ children }: PropsWithChildren) => (
  <div className="flex">
    <Nav />
    <div className="bg-white p-4 w-full">{children}</div>
  </div>
);
