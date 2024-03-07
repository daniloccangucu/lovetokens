import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

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
import CustomButton from '../shared/CustomButton';

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

    useTimeout(() => {
        console.log(updateLoveTokenNotification.isSuccess, updateLoveTokenNotification.uri)
        if (updateLoveTokenNotification.isSuccess) {
            window.location.reload();
        }
    }, 4500);

    return (
        <Form
            onSubmit={handleSubmit}
            callback={updateLoveToken}
            method={"PUT"}
            isLoading={isLoading}
            successMessage="Love Token updated successfully! Refreshing your Atelier..."
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
            <CustomButton onClick={onExitEditingMode} label="Cancel" customClass={{ replace: true, code: "mr-2 font-bold py-2 px-4 rounded mt-4" }} />
        </Form>
    );
}

export default UpdateUsersLoveToken;
