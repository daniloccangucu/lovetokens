import { FieldValues } from "react-hook-form";
import { FormProps } from "../../models/Types";
import { handleFormSubmission } from '../../utils/storeUtils';
import { useDispatch } from "react-redux";

const Form = (
    { onSubmit,
        children,
        isLoading,
        callback,
        successMessage,
        errorMessage,
        setNotification,
        clearNotification
    }: FormProps
) => {
    const dispatch = useDispatch();

    const onSubmitCallback = async (data: FieldValues) => {
        await handleFormSubmission({
            callback,
            setNotification: (notification) => dispatch(setNotification(notification)),
            successMessage,
            errorMessage,
            clearNotification: () => dispatch(clearNotification()),
        }, data);
    };

    return (<>
        <form onSubmit={onSubmit((data) => onSubmitCallback(data))} className="max-w-md mx-auto background--lighter-persian-pink shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-3">
            {children}
            <button disabled={isLoading} type="submit" className="background--ce-soir hover:background--ce-soir:hover text-white font-bold py-2 px-4 rounded mt-4">
                Submit
            </button>

        </form>
    </>
    );
};

export default Form;