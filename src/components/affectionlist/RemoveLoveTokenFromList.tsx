import { useRemoveLoveTokenFromListMutation } from '../../store/affectionListApi';
import useMutationWithNotification from '../../utils/useMutationWithNotification';
import {
    setRemoveLoveTokenFromListNotification,
    clearRemoveLoveTokenFromListNotification
} from '../../store/notificationSlice';
import CustomButton from '../shared/CustomButton';

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
        <div className="ml-2">
            <CustomButton onClick={handleRemoveButtonClick} label="Delete" isLoading={isLoading} loadingText='Deleting...' />
        </div>
    );
}

export default RemoveLoveTokenFromList;
