import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '../../store/creationSortSlice';
import { RootState, SortSettings } from '../../models/Types';
import { useTheme } from '../../contexts/ThemeContext';

const CreationSortInput = () => {
    const { theme } = useTheme();
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
                className={`text-lg outline-none
                    ${theme === 'light' ?
                        'text--ce-soir border-b border-violet-600' :
                        'text-gray-200 background--black-ce-soir border-b border-gray-600'}`
                }
            >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    );
};

export default CreationSortInput;
