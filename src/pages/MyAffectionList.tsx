import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import PageHeader from "../components/headers/PageHeader";
import SmallPhraseDisplay from "../components/lovearchive/SmallPhraseDisplay";
import { LoveToken } from "../models/LoveToken";
import { useGetAffectionListQuery } from "../store/affectionListApi";
import DataLoader from "../utils/DataLoader";
import { getUserFromLocalStorage } from "../utils/storeUtils";
import HeaderTwo from "../components/headers/HeaderTwo";
import RemoveLoveTokenFromList from "../components/affectionlist/RemoveLoveTokenFromList";
import { RootState } from "../models/Types";

function MyAffectionList() {
    const location = useLocation();
    const user = getUserFromLocalStorage();
    const { data, error, isLoading, refetch: refetchLoveTokens } = useGetAffectionListQuery(user?.token);
    const removeLoveTokenFromListNotification = useSelector((state: RootState) => state.notification.removeLoveTokenFromList);

    useEffect(() => {
        if (location.key || removeLoveTokenFromListNotification) {
            refetchLoveTokens()
        }
    }, [location.key, refetchLoveTokens, removeLoveTokenFromListNotification]);

    return (
        <DataLoader
            isLoading={isLoading}
            error={error}
            data={data}
            emptyMessage="No affection list to be displayed"
            render={() => (
                <section className="p-4">
                    <PageHeader
                        title="My affection list"
                        subtitle="Interact with your favourite Love Tokens from the Love Archive!"
                    />
                    <HeaderTwo title="I feel loved when you..." />
                    {data.affectionList.map((loveToken: LoveToken, index: number) => (
                            <article
                                key={loveToken.tokenNumber}
                            className="py-2 px-2 pl-0 w-fit"
                            >
                            <div className="flex">
                                <span className="mr-2 text--ce-soir text-xl">{index + 1}</span>
                                <SmallPhraseDisplay {...loveToken} />
                                <RemoveLoveTokenFromList loveTokenId={loveToken._id} />
                            </div>
                        </article>))}
                </section>
            )}
        />
    )
}

export default MyAffectionList
