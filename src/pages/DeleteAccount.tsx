import { RootState } from "../models/Types";
import { useSelector } from "react-redux";
import useNotificationToast from "../utils/useNotificationToast";
import { useNavigate } from "react-router-dom";
import useTimeout from "../utils/useTimeout";
import PageHeader from "../components/headers/PageHeader";
import cloud from "../images/cloud.png";
import CustomButton from "../components/shared/CustomButton";
import { getUserFromLocalStorage } from "../utils/utils";
import { useRequireLoggedInUser } from "../utils/useRequireLoggedInUser";
import { setDeleteUserNotification, clearDeleteUserNotification } from "../store/notificationSlice";
import useMutationWithNotification from "../utils/useMutationWithNotification";
import { useDeleteUserMutation } from "../store/userApi";

function DeleteAccount() {
    const user = getUserFromLocalStorage()
    const deleteUserNotification = useSelector((state: RootState) => state.notification.deleteUser);
    const [mutate, { isLoading }] = useDeleteUserMutation();
    const navigate = useNavigate();

    useNotificationToast(deleteUserNotification);

    useTimeout(() => {
        if (deleteUserNotification.isSuccess) {
            navigate("/logout");
        }
    }, 4500);

    const [handleDeleteUser] = useMutationWithNotification(
        () => [mutate, { isLoading }],
        "User deleted successfully",
        "Failed to delete user. Please try again later.",
        setDeleteUserNotification,
        clearDeleteUserNotification
    );

    const handleDeleteUserButtonClick = () => {
        handleDeleteUser({ userId: user!.userId });
    };

    const isLoggedIn = useRequireLoggedInUser(user);
    if (!isLoggedIn) {
        return null;
    }

    return (
        <section className="p-4 w-full lg:max-w-6xl mx-auto section-container--min-height">
            <PageHeader title="Delete account" subtitle="We're sad to see you go..." />
            <div className="flex flex-col items-center mt-1 mb-10">
                <img className="object-contain h-50 w-60" src={cloud} alt="Illustration of a cloud" />
                <CustomButton onClick={handleDeleteUserButtonClick} label="Bye bye!" isLoading={isLoading} loadingText="Deleting..." />
            </div>
        </section>
    );
}

export default DeleteAccount;
