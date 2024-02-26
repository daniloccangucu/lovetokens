import { NavLinkProps } from "../../models/Types";

const NavLink = ({ href, text }: NavLinkProps) => {
    return (
        <a href={href} className="text-white mr-3">
            {text}
        </a>
    );
};

export default NavLink;
