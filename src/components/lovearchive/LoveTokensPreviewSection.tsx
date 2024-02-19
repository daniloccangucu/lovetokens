import LoveTokensPreview from './LoveTokensPreview';
import DataLoader from "../../utils/DataLoader";
import HeaderTwo from "../headers/HeaderTwo";
import { useFetchLoveTokensQuery } from '../../store/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../models/Types';
import { sortLoveTokens } from '../../utils/storeUtils';

function SectionLoveTokensPreview({ selectedCategories }: { selectedCategories: string[] }) {
    const { data: loveTokens = [], isLoading: tokensLoading, error: tokensError } = useFetchLoveTokensQuery(selectedCategories);

    const sortOrder = useSelector((state: RootState) => state.creationSort.sortOrder);
    const sortedLoveTokens = sortLoveTokens(loveTokens, sortOrder);


    return (
        <DataLoader
            isLoading={tokensLoading}
            error={tokensError}
            data={loveTokens}
            emptyMessage="There are no Love Tokens to be displayed"
            render={() => (
                <>
                    <HeaderTwo title="I feel loved when you..." />
                    <LoveTokensPreview loveTokens={sortedLoveTokens} />
                </>
            )}
        />
    );
}

export default SectionLoveTokensPreview;