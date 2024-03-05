import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { NotificationBoxProps } from '../../models/Types';

function NotificationBox({ message, to, toMessage }: NotificationBoxProps) {
    const { theme } = useTheme();

    return (
        <div className="flex items-center justify-center mt-2">
            <div className={`p-2 mx-auto inline-block border border--ce-soir border-2 ${theme === 'light' ? 'background--lighter-ce-soir' : 'background--darker-ce-soir'} text-center rounded-lg max-w-md mb-4`}>
                <p className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>{message}</p>
                <p>
                    {to ? (<Link to={to} className={`text-midnight-blue underline ${theme === 'light' ? 'hover:text-blue-700' : 'hover:text-blue-300'}`}>
                        {toMessage}
                    </Link>) : (toMessage ? toMessage : null)}

                </p>
            </div>
        </div>
    );
}

export default NotificationBox;
