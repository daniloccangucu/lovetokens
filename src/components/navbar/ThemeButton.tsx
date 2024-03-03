import { useTheme } from "../../contexts/ThemeContext";

function ThemeButton() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
    )
}

export default ThemeButton
