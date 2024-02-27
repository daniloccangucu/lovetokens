import { useNavigate } from "react-router-dom";
import { User } from "../models/Types";

export const useRequireLoggedInUser = (user: User | null) => {
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return false;
  }

  return true;
};
