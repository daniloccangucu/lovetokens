import { useParams } from "react-router-dom";

import { LoveToken } from "../models/LoveToken"
import { useFetchLoveTokenByNumberQuery } from "../store/loveTokensApi"
import DataLoader from "../utils/DataLoader"
import PageHeader from "../components/headers/PageHeader"
import LargePhraseDisplay from "../components/singlelovetoken/LargePhraseDisplay"
import CategoryDisplay from "../components/singlelovetoken/CategoryDisplay";
import CreationDisplay from "../components/lovearchive/CreationDisplay";
import NotificationBox from "../components/shared/NotificationBox";

function SingleLoveToken({ loggedUser }: { loggedUser: boolean }) {
    const { tokenNumber } = useParams();
    const { data: loveToken, isLoading, error } = useFetchLoveTokenByNumberQuery(tokenNumber!);

    return (
        <section className="p-4 w-full lg:max-w-6xl mx-auto section-container--min-height">
            <DataLoader
                isLoading={isLoading}
                error={error}
                data={loveToken}
                emptyMessage={`Love Token number #${tokenNumber} doesn't exist!`}
                render={() => {
                    const typedLoveToken = loveToken as LoveToken;

                    return (
                        <>
                            <PageHeader
                                title={`Love Token #${loveToken!.tokenNumber}`}
                                subtitle=""
                            />
                            <CreationDisplay
                                creationDate={loveToken!.creationDate}
                                size="large"
                            />
                            <article className="mt-3">
                                <LargePhraseDisplay {...typedLoveToken} /><br />
                                <CategoryDisplay labels={typedLoveToken.labels} />
                            </article>
                            {loggedUser ? null :
                                <NotificationBox
                                    message="Open the door to deeper connections."
                                    to="/register"
                                    toMessage="Join our beloved community!"
                                />
                            }
                        </>
                    )
                }}
            />
        </section>
    )
}

export default SingleLoveToken
