import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useTimeout from '../utils/useTimeout';
import PageHeader from '../components/headers/PageHeader';
import InputField from '../components/shared/InputField';
import Form from '../components/shared/Form';
import { useLoginUserMutation } from '../store/userApi';
import { RootState } from '../models/Types';
import {
    clearLoginNotification,
    setLoginNotification
} from '../store/notificationSlice';
import useNotificationToast from '../utils/useNotificationToast';

function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const loginNotification = useSelector((state: RootState) => state.notification.login);
    const navigate = useNavigate();

    useTimeout(() => {
        if (loginNotification.isSuccess) {
            navigate("/authenticate");
        }
    }, 4500);

    useNotificationToast(loginNotification);

    return (
        <section className="flex-row p-4 w-full lg:max-w-6xl section-container--min-height mx-auto">
            <PageHeader title="Login" subtitle="Insert your credentials and have full access to Love Tokens" />
            <Form
                onSubmit={handleSubmit}
                isLoading={isLoading}
                callback={loginUser}
                successMessage="You are logged! Redirecting to your profile..."
                errorMessage="Error while logging in, please try again soon or contact us!"
                setNotification={setLoginNotification}
                clearNotification={clearLoginNotification}
            >
                <InputField id="email" label="Email" type="email" register={register} required={true} errors={errors} />
                <InputField id="password" label="Password" type="password" register={register} required={true} errors={errors} />
            </Form>
        </section>
    );
}

export default Login;
