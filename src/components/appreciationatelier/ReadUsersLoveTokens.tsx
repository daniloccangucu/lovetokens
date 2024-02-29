import { useState } from "react";

import { Category } from "../../models/Category";
import { LoveToken } from "../../models/LoveToken";
import { User } from "../../models/Types";
import { useDeleteLoveTokenMutation, useFetchUserLoveTokenQuery } from "../../store/loveTokensApi";
import DataLoader from "../../utils/DataLoader";
import CreationDisplay from "../lovearchive/CreationDisplay";
import SmallPhraseDisplay from "../lovearchive/SmallPhraseDisplay";
import UpdateUsersLoveToken from "./UpdateUsersLoveToken";

function ReadUsersLoveTokens({ user, categories }: { user: User, categories: Category[] }) {
    const { data: usersLoveTokens = [], error, isLoading } = useFetchUserLoveTokenQuery({ userId: user.userId, token: user.token });
    const [deleteLoveTokenMutation] = useDeleteLoveTokenMutation();

    const [editingLoveToken, setEditingLoveToken] = useState<LoveToken | null>(null);

    const handleEditLoveToken = (loveToken: LoveToken) => {
        setEditingLoveToken(loveToken);
    };

    const handleExitEditingMode = () => {
        setEditingLoveToken(null);
    };

    const handleDeleteLoveToken = async (tokenNumber: string) => {
        try {
            await deleteLoveTokenMutation({ tokenNumber, jwtToken: user.token });
            // TODO set notification success
            // TODO refetch
        } catch (error) {
            console.error("Error deleting love token:", error);
            // TODO set delete notification error
        }
    };

    return (
        <section className="flex justify-between items-start p-4">
            <DataLoader
                isLoading={isLoading}
                error={error}
                data={usersLoveTokens}
                emptyMessage="This user has no Love Tokens"
                render={() =>
                (
                    <div className="flex flex-wrap justify-center items-center">
                        {usersLoveTokens.map((usersLoveToken: LoveToken) =>
                            <article
                                key={usersLoveToken.tokenNumber}
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-2 px-2 pl-0"
                            >
                                {editingLoveToken === usersLoveToken ? (
                                    <UpdateUsersLoveToken
                                        categories={categories}
                                        user={user}
                                        loveToken={usersLoveToken}
                                        onExitEditingMode={handleExitEditingMode}
                                    />
                                ) : (
                                    <>
                                            <SmallPhraseDisplay {...usersLoveToken} />
                                            <CreationDisplay
                                                creationDate={usersLoveToken.creationDate}
                                                size="small"
                                            />
                                        <button onClick={() => handleEditLoveToken(usersLoveToken)}>Edit</button>__
                                        <button onClick={() => handleDeleteLoveToken(String(usersLoveToken.tokenNumber))}> Delete</button>
                                    </>
                                )}

                            </article>)}
                    </div>
                )}
            />
        </section>
    );
}

export default ReadUsersLoveTokens;