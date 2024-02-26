import { NavSectionProp } from '../../models/Types';
import NavLink from './NavLink';
import NavSeparator from './NavSeparator';


const CenterSection = ({ loggedUser }: NavSectionProp) => {
    return (
        <div className="center-section">
            <NavLink href="/archive" text="Love Archive" />
            {loggedUser ? (
                <>
                    <NavSeparator />
                    <NavLink href="/atelier" text="Appreciation Atelier" />
                    <NavSeparator />
                    <NavLink href="/affection-cache" text="My Affection List" />
                </>
            ) : (
                <>
                </>
            )}
        </div>
    );
};

export default CenterSection;
