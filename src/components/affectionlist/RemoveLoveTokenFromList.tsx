import { getUserFromLocalStorage } from '../../utils/storeUtils';
import { useRemoveLoveTokenFromListMutation } from '../../store/affectionListApi';
import {
    setRemoveLoveTokenFromListNotification,
    clearRemoveLoveTokenFromListNotification
} from '../../store/notificationSlice';
import { useDispatch } from 'react-redux';

function RemoveLoveTokenFromList({ loveTokenId }: { loveTokenId: string }) {
    const user = getUserFromLocalStorage();
    const dispatch = useDispatch();
    const [removeLoveTokenFromList, { isLoading }] = useRemoveLoveTokenFromListMutation();

    const handleRemoveLoveTokenFromList = async () => {
        try {
            const result = await removeLoveTokenFromList({ loveTokenId, jwToken: user?.token });

            if ('data' in result && result.data && result.data.success) {
                dispatch(setRemoveLoveTokenFromListNotification({ message: "Love Token removed from Appreciation List", isSuccess: true }))
            } else if ('error' in result && result.error) {

            }
            // const response = await removeLoveTokenFromList({ loveTokenId, jwToken: user?.token });
            // TODO Handle success notification
        } catch (error) {
            // TODO Handle error notification
        }
        dispatch(clearRemoveLoveTokenFromListNotification())
    };

    return (
        <div>
            <button onClick={handleRemoveLoveTokenFromList} disabled={isLoading}>
                {isLoading ? 'Removing...' : 'X'}
            </button>
        </div>
    );
}

export default RemoveLoveTokenFromList;
