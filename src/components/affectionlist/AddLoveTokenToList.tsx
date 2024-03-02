import { useAddLoveTokenToListMutation } from '../../store/affectionListApi';
import useMutationWithNotification from '../../utils/useMutationWithNotification';
import { setAddLoveTokenToListNotification, clearAddLoveTokenToListNotification } from '../../store/notificationSlice';

function AddLoveTokenToList({ loveTokenId }: { loveTokenId: string }) {
    const [mutate, { isLoading }] = useAddLoveTokenToListMutation();
    const [handleAddLoveTokenToList] = useMutationWithNotification(
        () => [mutate, { isLoading }],
        "Love Token added to your Affection List!",
        "Failed to add Love Token. Please try again later.",
        (notification) => setAddLoveTokenToListNotification({ message: notification.message || "", isSuccess: notification.isSuccess }),
        clearAddLoveTokenToListNotification
    );

    const handleAddButtonClick = () => {
        handleAddLoveTokenToList({ loveTokenId });
    };

    return (
        <div>
            <button onClick={handleAddButtonClick} disabled={isLoading}>
                {isLoading ? 'Adding...' : 'Add Love Token'}
            </button>
        </div>
    );
}

export default AddLoveTokenToList;


