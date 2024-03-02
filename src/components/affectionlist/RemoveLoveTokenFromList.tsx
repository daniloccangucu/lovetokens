import { useRemoveLoveTokenFromListMutation } from '../../store/affectionListApi';
import useMutationWithNotification from '../../utils/useMutationWithNotification';
import {
    setRemoveLoveTokenFromListNotification,
    clearRemoveLoveTokenFromListNotification
} from '../../store/notificationSlice';

function RemoveLoveTokenFromList({ loveTokenId }: { loveTokenId: string }) {
    const [mutate, { isLoading }] = useRemoveLoveTokenFromListMutation();

    const [handleRemoveLoveTokenFromList] = useMutationWithNotification(
        () => [mutate, { isLoading }],
        "Love Token removed from Appreciation List",
        "Failed to remove Love Token. Please try again later.",
        setRemoveLoveTokenFromListNotification,
        clearRemoveLoveTokenFromListNotification
    );

    const handleRemoveButtonClick = () => {
        handleRemoveLoveTokenFromList({ loveTokenId });
    };

    return (
        <div>
            <button onClick={handleRemoveButtonClick} disabled={isLoading}>
                {isLoading ? 'Removing...' : 'X'}
            </button>
        </div>
    );
}

export default RemoveLoveTokenFromList;
