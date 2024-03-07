import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import PageHeader from "../components/headers/PageHeader";
import { RootState } from '../models/Types';
import useNotificationToast from '../utils/useNotificationToast';
import { useFetchCategoriesQuery } from '../store/loveTokensApi';
import DataLoader from "../utils/DataLoader";
import { getUserFromLocalStorage } from "../utils/utils";
import useTimeout from "../utils/useTimeout";
import { useRequireLoggedInUser } from '../utils/useRequireLoggedInUser';
import CreateLoveToken from '../components/appreciationatelier/CreateLoveToken';
import ReadUsersLoveTokens from '../components/appreciationatelier/ReadUsersLoveTokens';
import HeaderTwo from '../components/headers/HeaderTwo';

function AppreciationAtelier() {
    const { data: categories = [], isLoading: categoriesLoading, error: categoriesError } = useFetchCategoriesQuery();
    const createLoveTokenNotification = useSelector((state: RootState) => state.notification.createLoveToken);
    const deleteLoveTokenNotification = useSelector((state: RootState) => state.notification.deleteLoveToken);
    const updateLoveTokenNotification = useSelector((state: RootState) => state.notification.updateLoveToken);

    const navigate = useNavigate();
    const user = getUserFromLocalStorage();

    useTimeout(() => {
        if (createLoveTokenNotification.isSuccess && createLoveTokenNotification.uri) {
            navigate(createLoveTokenNotification.uri);
        }
    }, 4500);

    useNotificationToast(createLoveTokenNotification);
    useNotificationToast(deleteLoveTokenNotification);
    useNotificationToast(updateLoveTokenNotification);

    const isLoggedIn = useRequireLoggedInUser(user);
    if (!isLoggedIn) {
        return null;
    }

    return (
        <DataLoader
            isLoading={categoriesLoading}
            error={categoriesError}
            data={categories}
            emptyMessage="There are no categories to be displayed"
            render={() => (
                <section className="p-4 w-full lg:max-w-6xl mx-auto">
                    <PageHeader
                        title="Appreciation Atelier"
                        subtitle="The official Love Token dashboard!"
                    />
                    <HeaderTwo title="Create a new Love Token" position="text-center" />
                    <CreateLoveToken categories={categories} createdUser={user!} />
                    <HeaderTwo title={`${user?.role === 'user' ? "Your created Love Tokens" : "All created Love Tokens"}`} position="text-center" />
                    <ReadUsersLoveTokens categories={categories} user={user!} />
                </section>
            )}
        />
    )
}

export default AppreciationAtelier

