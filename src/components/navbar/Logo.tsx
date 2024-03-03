import { Link } from 'react-router-dom';

import logo from "../../images/logo.png";

const Logo = () => {
    return (
        <Link to="/">
            <div className="flex items-center mr-3">
                <img src={logo} alt="LoveTokens Logo" className="h-6 mr-3" />
                <span className="text-white font-semibold">Love Tokens</span>
            </div>
        </Link>
    );
};

export default Logo;
