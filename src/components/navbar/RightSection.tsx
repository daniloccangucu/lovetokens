import { NavSectionProp } from "../../models/Types";
import NavLink from './NavLink';
import NavSeparator from './NavSeparator';

const RightSection = ({ loggedUser }: NavSectionProp) => {
    return (
        <div className="right-section flex items-center mr-4">
            {loggedUser ? (
                <>
                    <NavLink href="/profile" text="Profile" />
                    <NavSeparator />
                    <NavLink href="/logout" text="Logout" />
                </>
            ) : (
                <>
                    <NavLink href="/login" text="Login" />
                    <NavSeparator />
                    <NavLink href="/register" text="Register" />
                </>
            )}
        </div>
    );
};

export default RightSection;
