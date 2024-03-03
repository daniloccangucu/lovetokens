import { Link } from "react-router-dom"
import { useTheme } from "../../contexts/ThemeContext"

function CallToAction() {
  const { theme } = useTheme();
  return (
            <div className="flex">
                <div className={`p-2 mt-3 mx-auto inline-block border border--ce-soir border-2 ${theme === 'light' ? 'background--lighter-ce-soir' : 'background--darker-ce-soir'}  text-center`}>
                <p className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>Open the door to <span className="font-bold">deeper connections</span>.</p>
                    <p>
                      <Link to="/register" className="text-midnight-blue underline">
                        Join our beloved community!
                      </Link>
                    </p>
                </div>
            </div>
  )
}

export default CallToAction
