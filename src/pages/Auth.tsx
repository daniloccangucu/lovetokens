import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useAuthenticatedUser from "../utils/useAuthenticatedUser"
import DataLoader from "../utils/DataLoader";
import { updateAuthStatus } from "../store/authSlice";
import { setUserInLocalStorage } from "../utils/utils";

function Auth() {
    const { data: user, isLoading, error } = useAuthenticatedUser();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            setUserInLocalStorage(user.userId, user.role, user.userName)
            setTimeout(() => {
                dispatch(updateAuthStatus())
                navigate("/profile")
            }, 10)
        }
    }, [user, navigate, dispatch]);

    return (
        <DataLoader
            isLoading={isLoading}
            data={user}
            error={error}
            render={() => {
                // TODO better auth message?
                return (
                    <>
                        <p>Almost there...</p>
                    </>
                )
            }} />
    )
}

export default Auth
