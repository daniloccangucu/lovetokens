import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import PageHeader from '../components/headers/PageHeader';
import InputField from '../components/register/InputField';
import Form from '../components/register/Form';
import { useRegisterUserMutation } from '../store/userApi';
import FormNotification from '../components/register/FormNotification';
import { RootState } from '../models/Types';
import {
    clearRegisterNotification,
    setRegisterNotification
} from '../store/notificationSlice';
import { useNavigate } from 'react-router-dom';
import useTimeout from '../utils/useTimeout';

function Register() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const registerNotification = useSelector((state: RootState) => state.notification.register);
    const navigate = useNavigate()

    useTimeout(() => {
        if (registerNotification.isSuccess) {
            navigate("/archive");
        }
    }, 4000);

    return (
        <section className="flex-row p-4">
            <PageHeader title="Register" subtitle="Welcome to our beloved community!" />
            {registerNotification.message && (
                <FormNotification message={registerNotification.message} isSuccess={registerNotification.isSuccess} />
            )}
            <Form
                onSubmit={handleSubmit}
                isLoading={isLoading}
                callback={registerUser}
                successMessage="User registered with success! Redirecting to your profile..."
                errorMessage="Error while registering user, please try again soon or contact us!"
                setNotification={setRegisterNotification}
                clearNotification={clearRegisterNotification}
            >
                <InputField id="username" label="Username" type="text" register={register} required={true} errors={errors} />
                <InputField id="email" label="Email" type="email" register={register} required={true} errors={errors} />
                <InputField id="password" label="Password" type="password" register={register} required={true} errors={errors} />
            </Form>
        </section>
    );
}

export default Register;
