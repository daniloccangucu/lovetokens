import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '../../store/creationSortSlice';
import { RootState, SortSettings } from '../../models/Types';

const CreationSortInput = () => {
    const dispatch = useDispatch();
    const sortOrder = useSelector((state: RootState) => state.creationSort.sortOrder);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSortOrder = e.target.value;
        const sortSettings: SortSettings = {
            sortOrder: newSortOrder as "newest" | "oldest"
        };
        dispatch(setSortOrder(sortSettings));
    };

    return (
        <div className="flex items-center">
            <label htmlFor="sortOrder" className="mr-2 text-lg">Sort created by:</label>
            <select
                id="sortOrder"
                value={sortOrder}
                onChange={handleSortChange}
                className="text--ce-soir border-b border-violet-600 text-lg outline-none"
            >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    );
};

export default CreationSortInput;
