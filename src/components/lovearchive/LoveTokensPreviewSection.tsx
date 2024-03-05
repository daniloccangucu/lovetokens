import { useSelector } from 'react-redux';

import LoveTokensPreview from './LoveTokensPreview';
import DataLoader from "../../utils/DataLoader";
import HeaderTwo from "../headers/HeaderTwo";
import { useFetchLoveTokensQuery } from '../../store/loveTokensApi';
import { RootState } from '../../models/Types';
import { sortLoveTokens } from '../../utils/utils';

function SectionLoveTokensPreview({ selectedCategories, loggedUser }: { selectedCategories: string[], loggedUser: boolean }) {
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
                    <LoveTokensPreview loveTokens={sortedLoveTokens} loggedUser={loggedUser} />
                </>
            )}
        />
    );
}

export default SectionLoveTokensPreview;