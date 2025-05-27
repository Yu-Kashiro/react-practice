import * as React from "react";
import { createContext, PropsWithChildren, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoginCheckDone: boolean;
  setIsLoginCheckDone: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isLoginCheckDone: false,
  setIsLoginCheckDone: () => {},
  userName: "",
  setUserName: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [isLoginCheckDone, setIsLoginCheckDone] = useState<boolean>(false);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        isLoginCheckDone: isLoginCheckDone,
        setIsLoginCheckDone: setIsLoginCheckDone,
        userName: userName,
        setUserName: setUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
