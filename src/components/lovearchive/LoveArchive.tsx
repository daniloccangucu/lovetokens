import { useFetchLoveTokensQuery } from "../../store/api";

import LoveTokenPreview from "./LoveTokenPreview";
import DataLoader from "../../utils/DataLoader";
import { LoveToken } from "../../models/LoveToken";
import CallToAction from "../calltoaction/CallToAction";
import PageHeader from "../pageheader/PageHeader";

function LoveTokens() {
    const { data: loveTokens = [], error, isLoading } = useFetchLoveTokensQuery();

    return (
        <section className="p-4">
            <PageHeader
                title="Love Archive"
                subtitle="Explore our collection of Love Tokens"
            />
            <CallToAction />
            <DataLoader
                isLoading={isLoading}
                error={error}
                data={loveTokens}
                emptyMessage="There are no featured Love Tokens to be displayed"
                render={() => (
                    <>
                        <h2 className="mt-4 mb-4 text-2xl text--persian-pink">I feel loved when you...</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            {loveTokens.map((loveToken: LoveToken) => (
                                <LoveTokenPreview key={loveToken.tokenNumber} {...loveToken} />
                            ))}
                        </div>
                    </>
                )}
            />
        </section>
    )
}

export default LoveTokens