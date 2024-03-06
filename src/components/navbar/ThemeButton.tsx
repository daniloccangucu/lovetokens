import { useTheme } from "../../contexts/ThemeContext";

function ThemeButton() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
    )
}

export default ThemeButton
