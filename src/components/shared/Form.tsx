import { useDispatch } from "react-redux";

import { FieldValues } from "react-hook-form";
import { FormProps } from "../../models/Types";
import { getFormBackgroundClass, getFormSubmitButtonClass, handleFormSubmission } from '../../utils/utils';
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

    const formBackgroundClass = getFormBackgroundClass(theme)
    const formSubmitButtonClass = getFormSubmitButtonClass(theme)

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