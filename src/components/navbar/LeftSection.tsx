import Logo from './Logo';
import NavSeparator from './NavSeparator';
import ThemeButton from './ThemeButton';

const LeftSection = () => {
    return (
        <div className="left-section flex">
            <Logo />
            <NavSeparator />
            <ThemeButton />
        </div>
    );
};

export default LeftSection;
