import { NavSectionProp } from "../../models/Types";
import NavLink from './NavLink';
import NavSeparator from './NavSeparator';

const RightSection = ({ loggedUser }: NavSectionProp) => {
    return (
        <div className="right-section flex items-center mr-4">
            {loggedUser ? (
                <>
                    <NavLink to="/profile" text="Profile" />
                    <NavSeparator />
                    <NavLink to="/logout" text="Logout" />
                </>
            ) : (
                <>
                        <NavLink to="/login" text="Login" />
                    <NavSeparator />
                        <NavLink to="/register" text="Register" />
                </>
            )}
        </div>
    );
};

export default RightSection;
