import { CategoryButtonProps } from "../../models/Types";
import { useTheme } from "../../contexts/ThemeContext";

function CategoryButton({ category, selected, onClick, size }: CategoryButtonProps) {
    const { theme } = useTheme();

    const buttonClasses = selected ? (theme === 'light' ? 'bg-blue-500 text-white' : 'bg-black text-white') : (theme === 'light' ? 'bg-blue-200 text-blue-700' : 'bg-purple-900 text-gray-200');
    const buttonSizeClasses = size === 'small' ? 'px-2 py-1 text-xs' : 'px-4 py-2';

    return (
        <button
            onClick={onClick}
            className={`mr-2 mb-2 rounded-full ${buttonSizeClasses} ${buttonClasses}`}
        >
            {category}
        </button>
    );
}

export default CategoryButton;