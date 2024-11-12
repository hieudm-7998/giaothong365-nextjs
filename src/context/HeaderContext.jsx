"use client";
import { createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";

const IsHomeContext = createContext(false);

export const IsHomeProvider = ({ children }) => {
  const pathname = usePathname();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <IsHomeContext.Provider value={isHome}>{children}</IsHomeContext.Provider>
  );
};

export const useIsHome = () => {
  return useContext(IsHomeContext);
};
