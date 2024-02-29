import { NavSectionProp } from '../../models/Types';
import NavLink from './NavLink';
import NavSeparator from './NavSeparator';

const CenterSection = ({ loggedUser }: NavSectionProp) => {
    return (
        <div className="center-section">
            <NavLink to="/archive" text="Love Archive" />
            {loggedUser ? (
                <>
                    <NavSeparator />
                    <NavLink to="/atelier" text="Appreciation Atelier" />
                    <NavSeparator />
                    <NavLink to="/my-affection-list" text="My Affection List" />
                </>
            ) : (
                <>
                </>
            )}
        </div>
    );
};

export default CenterSection;
