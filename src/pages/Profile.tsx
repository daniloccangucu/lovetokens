import { getUserFromLocalStorage } from "../utils/utils";
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

// TODO delete account
// TODO member since
// TODO number of created LT (link to read created LTs)
// TODO number of saved LT in Affection List (link to affection list)