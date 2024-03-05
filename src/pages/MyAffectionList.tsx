import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import PageHeader from "../components/headers/PageHeader";
import SmallPhraseDisplay from "../components/lovearchive/SmallPhraseDisplay";
import { LoveToken } from "../models/LoveToken";
import { useGetAffectionListQuery, useUpdateAffectionListOrderMutation } from "../store/affectionListApi";
import DataLoader from "../utils/DataLoader";
import { getUserFromLocalStorage } from "../utils/utils";
import HeaderTwo from "../components/headers/HeaderTwo";
import RemoveLoveTokenFromList from "../components/affectionlist/RemoveLoveTokenFromList";
import { RootState } from "../models/Types";
import useNotificationToast from "../utils/useNotificationToast";
import NotificationBox from "../components/shared/NotificationBox";
import CustomButton from "../components/shared/CustomButton";

function MyAffectionList() {
    const location = useLocation();
    const user = getUserFromLocalStorage();
    const { data, error, isLoading, refetch: refetchLoveTokens } = useGetAffectionListQuery(user?.token);
    const removeLoveTokenFromListNotification = useSelector((state: RootState) => state.notification.removeLoveTokenFromList);
    const [affectionList, setAffectionList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [updateAffectionListOrder] = useUpdateAffectionListOrderMutation();

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const moveLoveTokenUp = (index: number) => {
        if (index > 0) {
            const newList = [...affectionList];
            const temp = newList[index - 1];
            newList[index - 1] = newList[index];
            newList[index] = temp;
            setAffectionList(newList);
        }
    };

    const moveLoveTokenDown = (index: number) => {
        if (index < affectionList.length - 1) {
            const newList = [...affectionList];
            const temp = newList[index + 1];
            newList[index + 1] = newList[index];
            newList[index] = temp;
            setAffectionList(newList);
        }
    };

    const handleSaveOrder = async () => {
        try {
            await updateAffectionListOrder({ newOrder: affectionList, jwToken: user?.token });
            toggleEditMode();
            refetchLoveTokens();
        } catch (error) {
            console.error("Error updating affection list order:", error);
        }
    };

    useEffect(() => {
        if (location.key || removeLoveTokenFromListNotification) {
            refetchLoveTokens()
        }
    }, [location.key, refetchLoveTokens, removeLoveTokenFromListNotification]);

    useEffect(() => {
        if (data) {
            setAffectionList(data.affectionList);
        }
    }, [data]);

    useNotificationToast(removeLoveTokenFromListNotification)

    return (
        <DataLoader
            isLoading={isLoading}
            error={error}
            data={data}
            emptyMessage="No affection list to be displayed"
            render={() => {
                return (
                    <section className="p-4 w-full lg:max-w-6xl mx-auto section-container--min-height">
                        <PageHeader
                        title="My affection list"
                        subtitle="Interact with your favourite Love Tokens from the Love Archive!"
                        />
                        {affectionList.length > 0 ?
                            <>
                                <HeaderTwo title="I feel loved when you..." />
                                {affectionList.length > 1 ? <CustomButton
                                    onClick={editMode ? handleSaveOrder : toggleEditMode}
                                    label={editMode ? "Save order" : "Edit list order"}
                                /> : null}
                                {affectionList.map((loveToken: LoveToken, index: number) => (
                                    <article
                                        key={loveToken.tokenNumber}
                                        className="py-2 px-2 pl-0 w-fit"
                                    >
                                        <div className="flex">
                                            <span className="mr-2 text--ce-soir text-xl">{index + 1}</span>
                                            <SmallPhraseDisplay {...loveToken} />
                                            {editMode && (
                                                <div>
                                                    {index > 0 && (
                                                        <button onClick={() => moveLoveTokenUp(index)}>⇡</button>
                                                    )}
                                                    {index < affectionList.length - 1 && (
                                                        <button onClick={() => moveLoveTokenDown(index)}>⇣</button>
                                                    )}
                                                </div>
                                            )}
                                            {editMode ? null : <RemoveLoveTokenFromList loveTokenId={loveToken._id} />}
                                        </div>
                                    </article>
                                ))}
                            </> :
                            <NotificationBox
                                message="You haven't saved any Love Tokens yet."
                                to="/archive"
                                toMessage="Browse the Love Archive and save some!"
                            />
                        }
                </section>
                )
            }}
        />
    )
}

export default MyAffectionList

// TODO shuffle order
// TODO saving... saved!
// TODO cancel editing
// TODO no tokens saved styles