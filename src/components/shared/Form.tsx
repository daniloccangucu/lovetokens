import { useDispatch } from "react-redux";

import { FieldValues } from "react-hook-form";
import { FormProps } from "../../models/Types";
import { handleFormSubmission } from '../../utils/utils';
import { useTheme } from "../../contexts/ThemeContext";

const Form = (
    { onSubmit,
        children,
        isLoading,
        callback,
        method,
        successMessage,
        errorMessage,
        setNotification,
        clearNotification,
        user,
        tokenNumber
    }: FormProps
) => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const formBackgroundClass = theme === 'light' ?
        'background--lighter-persian-pink' :
        'bg-indigo-900 text-gray-200';

    const formSubmitButtonClass = theme === 'light' ?
        'background--ce-soir hover:background--ce-soir:hover text-white' :
        'bg-gray-900 hover:bg-gray-800 text-gray-200'

    const onSubmitCallback = async (data: FieldValues) => {
        await handleFormSubmission({
            callback,
            method,
            setNotification: (notification) => dispatch(setNotification(notification)),
            successMessage,
            errorMessage,
            clearNotification: () => dispatch(clearNotification()),
            user,
            tokenNumber
        }, data);

    };

    return (
        <>
            <form onSubmit={onSubmit((data) => onSubmitCallback(data))} className={`max-w-md mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-3 ${formBackgroundClass}`}>
            {children}
            <button disabled={isLoading} type="submit" className={`font-bold py-2 px-4 rounded mt-4 ${formSubmitButtonClass}`}>
                Submit
                </button>
        </form>
    </>
    );
};

export default Form;