import { useEffect, useState } from "react";
import { RootState } from "../../models/Types";
import { isUserLoggedIn } from "../../utils/storeUtils";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import CenterSection from "./CenterSection";
import RightSection from "./RightSection";

const NavBar = () => {
  const [loggedUser, setLoggedUser] = useState(false);
  const updateAuthStatus = useSelector((state: RootState) => state.auth.updateAuthStatus);

  useEffect(() => {
    setLoggedUser(isUserLoggedIn())
  }, [updateAuthStatus])

  return (
    <nav className="navbar bg-navbar py-3 px-6 flex justify-between items-center">
      <Logo />
      <CenterSection loggedUser={loggedUser} />
      <RightSection loggedUser={loggedUser} />
    </nav>
  );
};

export default NavBar;
