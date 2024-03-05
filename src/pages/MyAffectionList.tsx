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

    const moveItemUp = (index: number) => {
        if (index > 0) {
            const newList = [...affectionList];
            const temp = newList[index - 1];
            newList[index - 1] = newList[index];
            newList[index] = temp;
            setAffectionList(newList);
        }
    };

    const moveItemDown = (index: number) => {
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
                <section className="p-4">
                    {affectionList.length > 0 ?
                    <>
                    <PageHeader
                        title="My affection list"
                        subtitle="Interact with your favourite Love Tokens from the Love Archive!"
                    />
                    <HeaderTwo title="I feel loved when you..." />
                        <button onClick={editMode ? handleSaveOrder : toggleEditMode}>
                            {editMode ? "Save Order" : "Edit Order"}
                        </button>
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
                                            <button onClick={() => moveItemUp(index)}>Up</button>
                                        )}
                                        {index < affectionList.length - 1 && (
                                            <button onClick={() => moveItemDown(index)}>Down</button>
                                        )}
                                    </div>
                                )}
                                {editMode ? null : <RemoveLoveTokenFromList loveTokenId={loveToken._id} />}
                            </div>
                        </article>
                        ))}
                    </> :
                    <>You have no Love Tokens saved</>}
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