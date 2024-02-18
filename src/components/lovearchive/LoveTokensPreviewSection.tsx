import LoveTokensPreview from './LoveTokensPreview';
import DataLoader from "../../utils/DataLoader";
import HeaderTwo from "../headers/HeaderTwo";
import { useFetchLoveTokensQuery } from '../../store/api';

function SectionLoveTokensPreview({ selectedCategories }: { selectedCategories: string[] }) {
    const { data: loveTokens = [], isLoading: tokensLoading, error: tokensError } = useFetchLoveTokensQuery(selectedCategories);

    return (
        <DataLoader
            isLoading={tokensLoading}
            error={tokensError}
            data={loveTokens}
            emptyMessage="There are no Love Tokens to be displayed"
            render={() => (
                <>
                    <HeaderTwo title="I feel loved when you..." />
                    <LoveTokensPreview loveTokens={loveTokens} />
                </>
            )}
        />
    );
}

export default SectionLoveTokensPreview;