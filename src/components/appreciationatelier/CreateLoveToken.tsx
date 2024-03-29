import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Form from '../shared/Form';
import InputField from '../shared/InputField';
import { useCreateLoveTokenMutation } from '../../store/loveTokensApi';
import {
    clearCreateLoveTokenNotification,
    setCreateLoveTokenNotification
} from '../../store/notificationSlice';
import { RootState, User } from '../../models/Types';
import useTimeout from '../../utils/useTimeout';
import { Category } from '../../models/Category';

function CreateLoveToken({
    categories, createdUser
}: { categories: Category[], createdUser: User }) {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createLoveToken, { isLoading }] = useCreateLoveTokenMutation();
    const createLoveTokenNotification = useSelector((state: RootState) => state.notification.createLoveToken);
    const navigate = useNavigate();

    useTimeout(() => {
        if (createLoveTokenNotification.isSuccess && createLoveTokenNotification.uri) {
            navigate(createLoveTokenNotification.uri);
        }
    }, 4500);

    return (
        <Form
            onSubmit={handleSubmit}
            isLoading={isLoading}
            callback={createLoveToken}
            successMessage="Love Token created successfully! Redirecting to its page..."
            errorMessage="Error while creating Love Token. Please try again."
            setNotification={setCreateLoveTokenNotification}
            clearNotification={clearCreateLoveTokenNotification}
            user={createdUser}
        >
            <InputField
                id="phrase"
                label="I feel loved when you"
                type="text"
                register={register}
                required={true}
                errors={errors}
            />
            <InputField
                id="labels"
                label="Categories"
                type="checkbox"
                register={register}
                required={true}
                errors={errors}
                options={categories.map((category: Category) => category.name)}
            />
        </Form>
    );
}

export default CreateLoveToken;
