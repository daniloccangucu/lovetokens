import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import PageHeader from "../components/headers/PageHeader";
import Form from "../components/register/Form";
import InputField from '../components/register/InputField';
import { RootState } from '../models/Types';
import {
    clearCreateLoveTokenNotification,
    setCreateLoveTokenNotification
} from '../store/notificationSlice';
import useNotificationToast from '../utils/useNotificationToast';
import { useCreateLoveTokenMutation, useFetchCategoriesQuery } from '../store/loveTokensApi';
import DataLoader from "../utils/DataLoader";
import { getUserFromLocalStorage } from "../utils/storeUtils";
import useTimeout from "../utils/useTimeout";

function AppreciationAtelier() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createLoveToken, { isLoading }] = useCreateLoveTokenMutation();
    const { data: categories = [], isLoading: categoriesLoading, error: categoriesError } = useFetchCategoriesQuery();
    const createLoveTokenNotification = useSelector((state: RootState) => state.notification.createLoveToken);
    const navigate = useNavigate();
    const user = getUserFromLocalStorage();
    const createdUser = { userId: user.userId, userName: user.userName }

    useTimeout(() => {
        if (createLoveTokenNotification.isSuccess && createLoveTokenNotification.uri) {
            navigate(createLoveTokenNotification.uri);
        }
    }, 4500);

    useNotificationToast(createLoveTokenNotification);

    return (
        <DataLoader
            isLoading={categoriesLoading}
            error={categoriesError}
            data={categories}
            emptyMessage="There are no categories to be displayed"
            render={() => (
                <section className="p-4">
                    <PageHeader title="Appreciation Atelier" subtitle="Create, update, read and delete your Love Tokens" />
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
                        <InputField id="phrase" label="I feel loved when you" type="text" register={register} required={true} errors={errors} />
                        <InputField id="labels" label="Categories" register={register} required={true} errors={errors} options={categories.map(category => category.name)} />
                    </Form>
                </section>
            )}
        />
    )
}

export default AppreciationAtelier

