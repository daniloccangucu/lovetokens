import { getUserFromLocalStorage } from "../utils/utils";
import { useRequireLoggedInUser } from "../utils/useRequireLoggedInUser";
import PageHeader from "../components/headers/PageHeader";
import HeaderTwo from "../components/headers/HeaderTwo";
import NotificationBox from "../components/shared/NotificationBox";
import touchingHands from "../images/touching-hands.png"
import { useGetUserInfoQuery } from "../store/userApi";
import DataLoader from "../utils/DataLoader";


const Profile = () => {
    const user = getUserFromLocalStorage()
    const { data: userData, error, isLoading } = useGetUserInfoQuery(user?.token);

    const isLoggedIn = useRequireLoggedInUser(user);
    if (!isLoggedIn) {
        return null;
    }

    return (
        <section className="p-4 w-full lg:max-w-6xl mx-auto section-container--min-height">
            <DataLoader
                isLoading={isLoading}
                error={error}
                data={userData}
                emptyMessage="There are no featured Love Tokens to be displayed"
                render={() =>
                    <>
                        <PageHeader title={`Hi, ${userData.userName}!`} subtitle="How are you today?" />
                        <div className="flex flex-col items-center mt-1 mb-10">
                            <img className="object-contain h-50 w-60" src={touchingHands} alt="Illustration of hands almost touching each other" />
                            <HeaderTwo title="You..." />
                            <div className="text-center">
                                <ul>
                                    <li>Have a <b>{userData.role}</b> role;</li>
                                    <li>Created <b>{userData.createdLoveTokens}</b> Love Tokens so far and;</li>
                                    <li>Joined Love Tokens on <b>{userData.joinedDate}</b>;</li>
                                    <li>Have <b>{userData.loveTokensInAffectionList}</b> Love Tokens added to your Affection List.</li>
                                </ul>
                            </div>
                        </div>
                        <NotificationBox message="Don't want to be part of Love Tokens anymore?" to={"/delete"} toMessage={"Delete your account"} />
                    </>
                }
            />
        </section>
    );
};

export default Profile;

// TODO delete account