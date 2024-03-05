import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Form from '../shared/Form';
import InputField from '../shared/InputField';
import { useUpdateLoveTokenMutation } from '../../store/loveTokensApi';
import {
    clearUpdateLoveTokenNotification,
    setUpdateLoveTokenNotification
} from '../../store/notificationSlice';
import { RootState, User } from '../../models/Types';
import useTimeout from '../../utils/useTimeout';
import { Category } from '../../models/Category';
import { LoveToken } from '../../models/LoveToken';

function UpdateUsersLoveToken({
    categories,
    user,
    loveToken,
    onExitEditingMode,
}: {
    categories: Category[],
    user: User,
    loveToken: LoveToken,
    onExitEditingMode: () => void,
}) {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateLoveToken, { isLoading }] = useUpdateLoveTokenMutation();
    const updateLoveTokenNotification = useSelector((state: RootState) => state.notification.updateLoveToken);
    const navigate = useNavigate();

    useTimeout(() => {
        if (updateLoveTokenNotification.isSuccess && updateLoveTokenNotification.uri) {
            navigate(updateLoveTokenNotification.uri);
        }
    }, 4500);

    return (
        <Form
            onSubmit={handleSubmit}
            callback={updateLoveToken}
            method={"PUT"}
            isLoading={isLoading}
            successMessage="Love Token updated successfully! Redirecting to its page..."
            errorMessage="Error while updating Love Token. Please try again."
            setNotification={setUpdateLoveTokenNotification}
            clearNotification={clearUpdateLoveTokenNotification}
            user={user}
            tokenNumber={loveToken.tokenNumber}
        >
            <InputField
                id="phrase"
                label="I feel loved when you"
                type="text"
                register={register}
                required={true}
                errors={errors}
                defaultValue={loveToken.phrase}
            />
            <InputField
                id="labels"
                label="Categories"
                type="checkbox"
                register={register}
                required={true}
                errors={errors}
                options={categories.map((category: Category) => category.name)}
                defaultValue={loveToken.labels}
            />
            <button type="button" onClick={onExitEditingMode}>Cancel</button>
        </Form>
    );
}

export default UpdateUsersLoveToken;
