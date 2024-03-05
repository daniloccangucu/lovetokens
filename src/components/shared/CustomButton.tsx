import React from 'react';
import { ButtonProps } from '../../models/Types';

const CustomButton: React.FC<ButtonProps> = ({ onClick, isLoading, label, loadingText }) => {
    return (
        <button
            className={`font-bold py-1 px-2 rounded mt-1 background--ce-soir hover:background--ce-soir:hover text-white text-xs ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? loadingText : label}
        </button>
    );
};

export default CustomButton;
