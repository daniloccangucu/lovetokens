import { useState } from "react";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import NavLink from "./NavLink";

const NavBar = ({ loggedUser }: { loggedUser: boolean }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar py-3 px-6 grid grid-cols-3 items-center w-full lg:max-w-6xl mx-auto shadow-md`}>
      <div className="flex items-center">
        <Logo />
        <ThemeButton />
      </div>
      <ul className={`col-span-1 flex navMenu justify-center ${isActive ? 'active' : ''}`}>
        <div className="nav-section text-center flex">
          <li onClick={removeActive}>
            <NavLink to="/archive" text="Love Archive" />
          </li>
          {loggedUser && (
            <>
              <li onClick={removeActive}>
                <NavLink to="/atelier" text="Appreciation Atelier" />
              </li>
              <li onClick={removeActive}>
                <NavLink to="/my-affection-list" text="Affection List" />
              </li>
            </>
          )}
        </div>
        <div className="flex-grow"></div>
        <div className="nav-section text-center flex">
          {loggedUser ? (
            <>
              <li onClick={removeActive}>
                <NavLink to="/profile" text="Profile" />
              </li>
              <li onClick={removeActive}>
                <NavLink to="/logout" text="Logout" />
              </li>
            </>
          ) : (
            <>
              <li onClick={removeActive}>
                <NavLink to="/login" text="Login" />
              </li>
              <li onClick={removeActive}>
                <NavLink to="/register" text="Register" />
              </li>
            </>
          )}
        </div>
      </ul>
      <div className={`hamburger ${isActive ? 'active' : ''} col-span-2 justify-self-end`} onClick={toggleActiveClass}>
        <span className={`bar`}></span>
        <span className={`bar`}></span>
        <span className={`bar`}></span>
      </div>
    </nav>
  );
}

export default NavBar;
