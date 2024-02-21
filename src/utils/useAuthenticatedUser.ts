import { useCheckAuthQuery } from "../store/userApi";

const useAuthenticatedUser = () => {
  const token = localStorage.getItem("token");
  return useCheckAuthQuery(token);
};

export default useAuthenticatedUser;
