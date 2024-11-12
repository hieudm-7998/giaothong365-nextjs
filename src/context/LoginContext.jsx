"use client";

import { createContext, useContext, useState } from "react";

export const DEFAULT = "default";
export const NO_VIOLATION = "no-violation";
export const HAS_VIOLATION = "has-violation";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loginType, setLoginType] = useState(DEFAULT);

  const toggleLoginType = (type) => {
    setLoginType(type);
  };

  return (
    <LoginContext.Provider value={{ loginType, toggleLoginType }}>
      {children}
    </LoginContext.Provider>
  );
}

// Custom hook to use the LoginContext
export const useLoginContext = () => useContext(LoginContext);
