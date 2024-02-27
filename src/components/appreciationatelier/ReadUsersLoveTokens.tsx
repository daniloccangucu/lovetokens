import { User } from "../../models/Types";
import { useFetchUserLoveTokenQuery } from "../../store/loveTokensApi";
import DataLoader from "../../utils/DataLoader";
import CreationDisplay from "../lovearchive/CreationDisplay";
import SmallPhraseDisplay from "../lovearchive/SmallPhraseDisplay";

function ReadUsersLoveTokens({ user }: { user: User }) {
    const { data: usersLoveTokens = [], error, isLoading } = useFetchUserLoveTokenQuery({ userId: user.userId, token: user.token });

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
                        {usersLoveTokens.map(usersLoveToken =>
                            <article
                                key={usersLoveToken.tokenNumber}
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-2 px-2 pl-0"
                            >
                                <SmallPhraseDisplay {...usersLoveToken} />
                                <CreationDisplay
                                    creationDate={usersLoveToken.creationDate}
                                    size="small"
                                />
                            </article>)}
                    </div>
                )}
            />
        </section>
    );
}

export default ReadUsersLoveTokens;