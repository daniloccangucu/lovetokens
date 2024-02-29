import PageHeader from "../components/headers/PageHeader";
import CreationDisplay from "../components/lovearchive/CreationDisplay";
import SmallPhraseDisplay from "../components/lovearchive/SmallPhraseDisplay";
import { LoveToken } from "../models/LoveToken";
import { useGetAffectionListQuery } from "../store/affectionListApi";
import DataLoader from "../utils/DataLoader";
import { getUserFromLocalStorage } from "../utils/storeUtils";

function MyAffectionList() {
    const user = getUserFromLocalStorage();
    const { data, error, isLoading } = useGetAffectionListQuery(user?.token);

    return (
        <DataLoader
            isLoading={isLoading}
            error={error}
            data={data}
            emptyMessage="No affection list to be displayed"
            render={() => (
                <section className="p-4">
                    <PageHeader
                        title="My affection list"
                        subtitle="Interact with your favourite Love Tokens from the Love Archive!"
                    />
                    <div className="flex flex-wrap justify-center items-center">
                        {data.affectionList.map((loveToken: LoveToken) => (
                            <article
                                key={loveToken.tokenNumber}
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-2 px-2 pl-0"
                            >
                                <SmallPhraseDisplay {...loveToken} />
                                <CreationDisplay
                                    creationDate={loveToken.creationDate}
                                    size="small"
                                />
                            </article>))}
                    </div>
                </section>
            )}
        />
    )
}

export default MyAffectionList
