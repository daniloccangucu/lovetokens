import { Link } from 'react-router-dom';
import { NavLinkProps } from "../../models/Types";

const NavLink = ({ to, text }: NavLinkProps) => {
    return (
        <Link to={to} className="text-white mr-3">
            {text}
        </Link>
    );
};

export default NavLink;
