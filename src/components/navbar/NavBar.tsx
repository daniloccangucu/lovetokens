import { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { RootState } from "../../models/Types";
import { isUserLoggedIn } from "../../utils/storeUtils";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [loggedUser, setLoggedUser] = useState(false);
  const updateAuthStatus = useSelector((state: RootState) => state.auth.updateAuthStatus);

  useEffect(() => {
    setLoggedUser(isUserLoggedIn())
  }, [updateAuthStatus])

  return (
    <nav className="navbar bg-navbar py-3 px-6 flex justify-between items-center">
      <div>
        <a href="/" className="flex items-center">
          <img src={logo} alt="LoveTokens Logo" className="h-10 mr-3" />
          <span className="text-white font-semibold">Love Tokens</span>
        </a>
      </div>
      <div className="center-section">
        <a href="/archive" className="text-white">
          Love Archive
        </a>
      </div>
      {loggedUser ?
        (<div className="right-section flex items-center mr-4">
          <a href="/profile" className="text-white mr-3">
            Profile
          </a>
          <span className="text-white mr-3">|</span>
          <a href="/logout" className="text-white mr-3">
            Logout
          </a>
        </div>) :
        (<div className="right-section flex items-center mr-4">
        <a href="/login" className="text-white mr-3">
          Login
        </a>
        <span className="text-white mr-3">|</span>
        <a href="/register" className="text-white">
          Register
        </a>
        </div>)}
    </nav>
  );
};

export default NavBar;
