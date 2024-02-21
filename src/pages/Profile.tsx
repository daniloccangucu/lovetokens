import { getUserFromLocalStorage, isUserLoggedIn } from "../utils/storeUtils";

const Profile = () => {
    if (!isUserLoggedIn()) {
        <p>Login to see your profile</p>
    }

    const user = getUserFromLocalStorage()

    return (
        <>
            <p>Hi, {user.id}</p>
        </>
    );
};

export default Profile;
