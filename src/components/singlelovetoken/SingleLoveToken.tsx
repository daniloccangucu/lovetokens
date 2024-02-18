import { useParams } from "react-router-dom";

import { LoveToken } from "../../models/LoveToken"
import { useFetchLoveTokenByNumberQuery } from "../../store/api"
import DataLoader from "../../utils/DataLoader"
import CallToAction from "../calltoaction/CallToAction"
import PageHeader from "../headers/PageHeader"
import LargePhraseDisplay from "./LargePhraseDisplay"
import CategoryDisplay from "./CategoryDisplay";

function SingleLoveToken() {
    const { tokenNumber } = useParams();
    const { data: loveToken, isLoading, error } = useFetchLoveTokenByNumberQuery(tokenNumber!);

    return (
        <section className="p-4">
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
                                subtitle={`created at ${loveToken!.creationDate}`}
                            />
                            <article className="mt-3">
                                <LargePhraseDisplay {...typedLoveToken} /><br />
                                <CategoryDisplay labels={typedLoveToken.labels} />
                            </article>
                            <CallToAction />
                        </>
                    )
                }}
            />
        </section>
    )
}

export default SingleLoveToken
