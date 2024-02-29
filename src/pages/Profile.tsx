import { getUserFromLocalStorage } from "../utils/storeUtils";
import { useRequireLoggedInUser } from "../utils/useRequireLoggedInUser";

const Profile = () => {
    const user = getUserFromLocalStorage()

    const isLoggedIn = useRequireLoggedInUser(user);
    if (!isLoggedIn) {
        return null;
    }

    return (
        <>
            <p>Hi, {user!.userId}</p>
        </>
    );
};

export default Profile;
