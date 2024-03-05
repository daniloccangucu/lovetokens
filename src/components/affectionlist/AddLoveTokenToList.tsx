import { useAddLoveTokenToListMutation } from '../../store/affectionListApi';
import useMutationWithNotification from '../../utils/useMutationWithNotification';
import { setAddLoveTokenToListNotification, clearAddLoveTokenToListNotification } from '../../store/notificationSlice';
import CustomButton from '../shared/CustomButton';

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
            <CustomButton
                onClick={handleAddButtonClick}
                isLoading={isLoading}
                label="Add to Affection List"
                loadingText="Adding..."
            />
        </div>
    );
}

export default AddLoveTokenToList;


