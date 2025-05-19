import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn, userName, setUserName } = useContext(AuthContext);

  const login = () => setIsLoggedIn(true)
  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
  }

  return {isLoggedIn, login, logout, userName, setUserName};
};