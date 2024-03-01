import { getUserFromLocalStorage } from '../../utils/storeUtils';
import { useAddLoveTokenToListMutation } from '../../store/affectionListApi';

function AddLoveTokenToList({ loveTokenId }: { loveTokenId: string }) {
    const user = getUserFromLocalStorage();
    const [addLoveTokenToList, { isLoading }] = useAddLoveTokenToListMutation();

    const handleAddLoveTokenToList = async () => {
        try {
            await addLoveTokenToList({ loveTokenId, jwToken: user?.token });
            // const response = await addLoveTokenToList({ loveTokenId, jwToken: user?.token });
            // TODO notification message success or failed from response
        } catch (error) {
            // TODO notification message failed from error
        }
    };

    return (
        <div>
            <button onClick={handleAddLoveTokenToList} disabled={isLoading}>
                {isLoading ? 'Adding...' : 'Add Love Token'}
            </button>
        </div>
    );
}

export default AddLoveTokenToList;