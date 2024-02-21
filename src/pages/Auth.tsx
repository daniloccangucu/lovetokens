import useAuthenticatedUser from "../utils/useAuthenticatedUser"
import DataLoader from "../utils/DataLoader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { updateAuthStatus } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { setUserInLocalStorage } from "../utils/storeUtils";

function Auth() {
    const { data: user, isLoading, error } = useAuthenticatedUser();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            setUserInLocalStorage(user.userId, user.role)
            setTimeout(() => {
                navigate("/profile")
            }, 0)
            dispatch(updateAuthStatus())
        }
    }, [user, navigate, dispatch]);

    return (
        <DataLoader
            isLoading={isLoading}
            data={user}
            error={error}
            render={() => {
                return (
                    <>
                        <p>Almost there...</p>
                    </>
                )
            }} />
    )
}

export default Auth
