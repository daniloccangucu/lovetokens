import { useFetchLoveTokensQuery } from "../../store/api";

import LoveTokenPreview from "./LoveTokenPreview";
import DataLoader from "../../utils/DataLoader";

function LoveTokens() {
    const { data: loveTokens = [], error, isLoading } = useFetchLoveTokensQuery();

    return (
        <section className="p-4">
            <h1 className="font-bold text-4xl text--persian-pink">Love Tokens</h1>
            <h2 className="text-2xl">Browse our love expressions archive with dozens of Love Tokens!</h2>
            <br /><p>Registered users can make their own <a href="/">Love Tokens Collection</a>.</p>
            <p><a href="/">Join our loved community!</a></p>
            <DataLoader
                isLoading={isLoading}
                error={error}
                data={loveTokens}
                emptyMessage="There are no featured Love Tokens to be displayed"
                render={() => <LoveTokenPreview {...loveTokens} />}
            />
        </section>
    )
}

export default LoveTokens