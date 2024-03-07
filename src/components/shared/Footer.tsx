import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-wrapper">
            <footer className="border-t border-gray-300 bg-white mt-3 py-4 px-2 footer flex flex-col items-center justify-center">
                <p className="text-sm text-gray-600 mb-2">Love Tokens is a project created by <Link to="http://danilocangucu.info" target="_blank" rel="noopener noreferrer" className="underline">Danilo Canguçu</Link>. The GitHub repository for the frontend code can be found <Link to="https://github.com/danilocangucu/lovetokens" target="_blank" rel="noopener noreferrer" className="underline">here</Link>.</p>
                <p className="text-sm text-gray-600 mb-2">Frontend: <Link to="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="underline">React</Link>, <Link to="https://redux.js.org/" target="_blank" rel="noopener noreferrer" className="underline">Redux</Link>, <Link to="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer" className="underline">React Tool Kit</Link>, <Link to="https://react-hook-form.com/" target="_blank" rel="noopener noreferrer" className="underline">React Hook Form</Link>, <Link to="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="underline">React Router Dom</Link>, <Link to="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="underline">Tailwind CSS</Link>, <Link to="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" className="underline">Sass</Link>, and <Link to="https://github.com/fkhadra/react-toastify" target="_blank" rel="noopener noreferrer" className="underline">toastify</Link>.</p>
                <p className="text-sm text-gray-600">Backend: <Link to="https://aws.amazon.com/ec2/" target="_blank" rel="noopener noreferrer" className="underline">AWS EC2</Link>, <Link to="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="underline">Node.js</Link>, <Link to="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="underline">Express</Link>, <Link to="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer" className="underline">Mongoose</Link>, jsonwebtoken, crypto, and bcrypt.</p>
            </footer>
        </div>
    );
}

export default Footer;
