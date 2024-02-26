import { getUserFromLocalStorage, isUserLoggedIn } from "../utils/storeUtils";

const Profile = () => {
    if (!isUserLoggedIn()) {
        return <p>Login to see your profile</p>
    }

    const user = getUserFromLocalStorage()

    return (
        <>
            <p>Hi, {user.userId}</p>
        </>
    );
};

export default Profile;
