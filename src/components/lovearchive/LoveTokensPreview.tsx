import { useDispatch, useSelector } from "react-redux";

import { LoveToken } from "../../models/LoveToken"
import SmallPhraseDisplay from "./SmallPhraseDisplay"
import CategoryButton from "./CategoryButton"
import { RootState } from "../../models/Types";
import { toggleCategory } from "../../store/categoriesSlice";
import CreationDisplay from "./CreationDisplay";
import AddLoveTokenToList from "../affectionlist/AddLoveTokenToList";
import useNotificationToast from "../../utils/useNotificationToast";


function LoveTokensPreview({ loveTokens, loggedUser }: { loveTokens: LoveToken[], loggedUser: boolean }) {
    const selectedCategories = useSelector((state: RootState) => state.categories.selectedCategories);
    const addLoveTokenToListNotification = useSelector((state: RootState) => state.notification.addLoveTokenToList);
    const dispatch = useDispatch();

    const handleCategorySelect = (category: string) => {
        dispatch(toggleCategory(category));
    };

    useNotificationToast(addLoveTokenToListNotification)

    return (
        <div className="flex flex-wrap justify-center items-center">
            {loveTokens.map((loveToken: LoveToken) => (
                <article
                    key={loveToken.tokenNumber}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-2 px-2 pl-0"
                >
                    <a href={`/archive/${loveToken.tokenNumber}`}>
                        <SmallPhraseDisplay {...loveToken} />
                    </a>
                    <CreationDisplay
                        creationDate={loveToken.creationDate}
                        size="small"
                    />
                    <div className="mt-2">
                        {loveToken.labels.map((category: string) => (
                            <CategoryButton
                                key={`${category}-${loveToken.tokenNumber}`}
                                category={category}
                                selected={selectedCategories.includes(category)}
                                onClick={() => handleCategorySelect(category)}
                                size="small"
                            />
                        ))}
                    </div>
                    {loggedUser ? <AddLoveTokenToList loveTokenId={loveToken._id} /> : null}
                </article>
            ))}
        </div>
    )
}

export default LoveTokensPreview

// TODO if user has in Affection List, button disabled
// TODO adding spin, added! / remove