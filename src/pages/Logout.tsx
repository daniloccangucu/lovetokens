import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../utils/utils";
import { updateAuthStatus } from "../store/authSlice";

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
        // TODO better logout?
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
