import { useFetchLoveTokensQuery } from "../../store/api";

import LoveTokenPreview from "./LoveTokenPreview";
import DataLoader from "../../utils/DataLoader";
import { LoveToken } from "../../models/LoveToken";

function LoveTokens() {
    const { data: loveTokens = [], error, isLoading } = useFetchLoveTokensQuery();

    return (
        <section className="p-4">
            <h1 className="font-bold text-4xl text--persian-pink">Love Archive</h1>
            <h2 className="text-xl italic">Explore our collection of Love Tokens</h2>
            <div className="flex">
                <div className="p-2 mt-3 mx-auto inline-block border border--ce-soir border-2 background--lighter-ce-soir text-center">
                    <p className="text-gray-800">Registered users can make their own <span className="font-bold">Love Tokens Collection</span>.</p>
                    <p><a href="/" className="text-midnight-blue underline">Join our loved community!</a></p>
                </div>
            </div>
            <DataLoader
                isLoading={isLoading}
                error={error}
                data={loveTokens}
                emptyMessage="There are no featured Love Tokens to be displayed"
                render={() => (
                    <>
                        <h2 className="mt-4 mb-4 text-2xl text--persian-pink">I feel loved when you...</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            {loveTokens.map((loveToken: LoveToken, index) => (
                                <LoveTokenPreview key={index} {...loveToken} />
                            ))}
                        </div>
                    </>
                )}
            />
        </section>
    )
}

export default LoveTokens