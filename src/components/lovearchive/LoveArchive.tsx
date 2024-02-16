import { useEffect, useState } from "react";

import { useFetchLoveTokensQuery } from "../../store/api";
import LoveTokenPreview from "./LoveTokenPreview";
import DataLoader from "../../utils/DataLoader";
import { LoveToken } from "../../models/LoveToken";
import CallToAction from "../calltoaction/CallToAction";
import PageHeader from "../pageheader/PageHeader";
import CategoryButton from "./CategoryButton";

function LoveTokens() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [loveTokensToDisplay, setLoveTokensToDisplay] = useState<LoveToken[]>([]);

    const { data: allLoveTokens = [], isLoading, error } = useFetchLoveTokensQuery();

    const handleCategorySelect = (category: string) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((c) => c !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    };

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setLoveTokensToDisplay(allLoveTokens);
        } else {
            const filteredLoveTokens = allLoveTokens.filter((loveToken: LoveToken) =>
                loveToken.labels.some((label) => selectedCategories.includes(label))
            );
            setLoveTokensToDisplay(filteredLoveTokens);
        }
    }, [selectedCategories, allLoveTokens]);

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
                data={loveTokensToDisplay}
                emptyMessage="There are no featured Love Tokens to be displayed"
                render={() => (
                    <>
                        <h2 className="mt-4 mb-4 text-2xl text--persian-pink">I feel loved when you...</h2>
                        <div>
                            {["Affection", "Intimacy"].map((category) => (
                                <CategoryButton
                                    key={category}
                                    category={category}
                                    selected={selectedCategories.includes(category)}
                                    onClick={() => handleCategorySelect(category)}
                                />
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            {loveTokensToDisplay.map((loveToken: LoveToken) => (
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