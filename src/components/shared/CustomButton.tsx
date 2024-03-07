import React from 'react';
import { ButtonProps, RootState } from '../../models/Types';
import { useTheme } from '../../contexts/ThemeContext';
import { useSelector } from 'react-redux';

const CustomButton: React.FC<ButtonProps> = ({ onClick, isLoading, label, loadingText, customClass, buttonId }) => {
    const { theme } = useTheme();
    const themeStyles = theme === 'dark' ? 'bg-gray-900 hover:bg-gray-800 text-gray-200' : 'background--ce-soir hover:background--ce-soir:hover text-white';
    const currentClickedButtonId = useSelector((state: RootState) => state.deletedButton.currentClickedButtonId);

    return (
        <button
            className={`${customClass?.replace === true ? '' : 'font-bold py-1 px-2 rounded mt-1 text-xs'}
                ${buttonId ?
                    ((isLoading && buttonId === currentClickedButtonId) ? 'opacity-50 cursor-not-allowed' : '') :
                    (isLoading ? 'opacity-50 cursor-not-allowed' : '')
                }
                ${customClass?.code ? (`${themeStyles} ${customClass?.code}`) : (themeStyles)}`
            }
            onClick={onClick}
            disabled={buttonId ?
                (isLoading && buttonId === currentClickedButtonId) :
                (isLoading)
            }
        >
            {buttonId ?
                ((isLoading && buttonId === currentClickedButtonId) ? loadingText : label) :
                (isLoading ? `${loadingText}` : `${label}`)
            }
        </button>
    );
};

export default CustomButton;

