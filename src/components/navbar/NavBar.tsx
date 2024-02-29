import Logo from "./Logo";
import CenterSection from "./CenterSection";
import RightSection from "./RightSection";

const NavBar = ({ loggedUser }: { loggedUser: boolean }) => {
  return (
    <nav className="navbar bg-navbar py-3 px-6 flex justify-between items-center">
      <Logo />
      <CenterSection loggedUser={loggedUser} />
      <RightSection loggedUser={loggedUser} />
    </nav>
  );
};

export default NavBar;
