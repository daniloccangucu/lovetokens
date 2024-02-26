import logo from "../../images/logo.png";

const Logo = () => {
    return (
        <div>
            <a href="/" className="flex items-center">
                <img src={logo} alt="LoveTokens Logo" className="h-10 mr-3" />
                <span className="text-white font-semibold">Love Tokens</span>
            </a>
        </div>
    );
};

export default Logo;
