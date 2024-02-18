import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '../../store/creationSortSlice';
import { RootState } from '../../models/Types';

const CreationSortInput = () => {
    const dispatch = useDispatch();
    const sortOrder = useSelector((state: RootState) => state.creationSort.sortOrder);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSortOrder = e.target.value;
        dispatch(setSortOrder(newSortOrder));
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
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
};

export default CreationSortInput;
