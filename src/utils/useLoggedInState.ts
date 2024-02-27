import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../models/Types";
import { isUserLoggedIn } from "./storeUtils";

export function useLoggedInState() {
  const updateAuthStatus = useSelector(
    (state: RootState) => state.auth.updateAuthStatus
  );
  const [loggedUser, setLoggedUser] = useState(isUserLoggedIn());

  useEffect(() => {
    setLoggedUser(isUserLoggedIn());
  }, [updateAuthStatus]);

  return loggedUser;
}
