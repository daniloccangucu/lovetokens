import React from 'react';
import { ButtonProps } from '../../models/Types';
import { useTheme } from '../../contexts/ThemeContext';

const CustomButton: React.FC<ButtonProps> = ({ onClick, isLoading, label, loadingText }) => {
    const { theme } = useTheme();
    const themeStyles = theme === 'dark' ? 'bg-gray-900 hover:bg-gray-800 text-gray-200' : 'background--ce-soir hover:background--ce-soir:hover text-white';
    console.log(theme)

    return (
        <button
            className={`font-bold py-1 px-2 rounded mt-1 text-xs
                ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                ${themeStyles}`
            }
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? loadingText : label}
        </button>
    );
};

export default CustomButton;
