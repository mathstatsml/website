import { Navbar } from "~/components/sections/navbar";
import { type ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    {children}
  </>
);
