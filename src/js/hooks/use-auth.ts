import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const USER_NAME_KEY = "userNameKey";

export const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn, userName, setUserName, isLoginCheckDone, setIsLoginCheckDone } =
    useContext(AuthContext);

  const login = () => {
    if (userName) {
      setIsLoggedIn(true);
      localStorage.setItem(USER_NAME_KEY, userName);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem(USER_NAME_KEY);
    setUserName("");
  };

  useEffect(() => {
    const userNameData = localStorage.getItem(USER_NAME_KEY);
    if (userNameData) {
      setUserName(userNameData);
      setIsLoggedIn(true);
    }
    setIsLoginCheckDone(true);
  }, []);

  return { isLoggedIn, isLoginCheckDone, login, logout, userName, setUserName };
};
