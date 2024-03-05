import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFetchLoveTokensQuery } from "../store/loveTokensApi";
import { RootState } from "../models/Types";
import PageHeader from "../components/headers/PageHeader";
import CategoriesSection from "../components/lovearchive/CategoriesSection";
import { toggleCategory } from "../store/categoriesSlice";
import LoveTokensPreviewSection from "../components/lovearchive/LoveTokensPreviewSection";
import CreationSortInput from "../components/lovearchive/CreationSortInput";
import NotificationBox from "../components/shared/NotificationBox";

function LoveTokens({ loggedUser }: { loggedUser: boolean }) {
    const selectedCategories = useSelector((state: RootState) => state.categories.selectedCategories);

    const dispatch = useDispatch();

    const { refetch: refetchLoveTokens } = useFetchLoveTokensQuery(selectedCategories);

    const handleCategorySelect = (category: string) => {
        dispatch(toggleCategory(category));
    };

    useEffect(() => {
        refetchLoveTokens()
    }, [selectedCategories, refetchLoveTokens]);

    return (
        <section className="p-4 w-full lg:max-w-6xl mx-auto section-container--min-height">
            <PageHeader
                title="Love Archive"
                subtitle="Explore our collection of Love Tokens"
            />
            {loggedUser ? null :
                <NotificationBox
                    message="Open the door to deeper connections."
                    to="/register"
                    toMessage="Join our beloved community!"
                />
            }
            <CategoriesSection
                selectedCategories={selectedCategories}
                handleCategorySelect={handleCategorySelect}
            />
            <CreationSortInput />
            <LoveTokensPreviewSection
                selectedCategories={selectedCategories} loggedUser={loggedUser}
            />
        </section>
    )
}

export default LoveTokens

// TODO backend: reduce categories to 10
// TODO check duplicated categories error