"use client";

import { createContext, useContext, useState } from "react";

export const DEFAULT = "default";
export const NO_VIOLATION = "no-violation";
export const HAS_VIOLATION = "has-violation";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loginType, setLoginType] = useState(DEFAULT);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginType = (type) => {
    setLoginType(type);
  };

  const toggleRegisterSuccess = (type) => {
    setIsRegisterSuccess(type);
  };

  const toggleIsLoggedIn = (type) => {
    setIsLoggedIn(type);
  };

  return (
    <LoginContext.Provider
      value={{
        loginType,
        toggleLoginType,
        isRegisterSuccess,
        toggleRegisterSuccess,
        isLoggedIn,
        toggleIsLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

// Custom hook to use the LoginContext
export const useLoginContext = () => useContext(LoginContext);
