import axios from 'axios';
import { useDispatch } from 'react-redux';
import { clearLoginNotification, setLoginNotification } from '../../store/notificationSlice';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useTheme } from '../../contexts/ThemeContext';

function GoogleLoginButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { theme } = useTheme();

    const formSubmitButtonClass = theme === 'light' ?
        'background--ce-soir hover:background--ce-soir:hover text-white' :
        'bg-gray-900 hover:bg-gray-800 text-gray-200'

    const baseUrl = process.env.REACT_APP_LOVE_TOKEN_API_URL;

    const googleLogin = useGoogleLogin({
        onSuccess: async ({ code }) => {
            try {
                const tokens = await axios.post(`${baseUrl}/auth/google`, { code });

                if (tokens.data.token) {
                    localStorage.setItem("token", tokens.data.token);
                    dispatch(setLoginNotification({ message: "You are logged with Google! Redirecting to your profile...", isSuccess: true }));
                    setTimeout(() => {
                        dispatch(clearLoginNotification());
                        navigate("/authenticate");
                    }, 5000);
                }
            } catch (error) {
                dispatch(setLoginNotification({ message: "Google login failed", isSuccess: false }));
                setTimeout(() => {
                    dispatch(clearLoginNotification());
                }, 5000);
                console.error('Google login failed:', error);
            }
        },
        flow: 'auth-code',
    });

    return (
        <button onClick={googleLogin} className={`mx-auto block font-bold py-2 px-4 rounded mt-4 ${formSubmitButtonClass}`}>Login with Google</button>
    );
}

export default GoogleLoginButton;
