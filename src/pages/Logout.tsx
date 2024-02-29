import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../utils/storeUtils";
import { updateAuthStatus } from "../store/authSlice";
import { useDispatch } from "react-redux";

function Logout() {
    const user = getUserFromLocalStorage()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            removeUserFromLocalStorage()
            setTimeout(() => {
                dispatch(updateAuthStatus())
                navigate("/")
            }, 10)
        }
    }, [user, navigate, dispatch]);

    return (
        <>
            {user ? (
                <p>Bye!</p>
            ) : (
                <p>You are not logged in</p>
            )}
        </>
    );
}

export default Logout
