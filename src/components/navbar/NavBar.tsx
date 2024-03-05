import CenterSection from "./CenterSection";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const NavBar = ({ loggedUser }: { loggedUser: boolean }) => {

  return (
    <nav className="navbar py-3 px-6 flex justify-between items-center w-full lg:max-w-6xl mx-auto shadow-md">
      <LeftSection />
      <CenterSection loggedUser={loggedUser} />
      <RightSection loggedUser={loggedUser} />
    </nav>
  );
};

export default NavBar;
