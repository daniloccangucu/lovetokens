import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserFromLocalStorage } from "./utils";
import {
  ClearNotificationAction,
  SetNotificationAction,
} from "../models/Types";

type MutationHook<TParams> = () => [
  (params: TParams) => Promise<any>,
  { isLoading: boolean }
];

function useMutationWithNotification<TParams>(
  mutationHook: MutationHook<TParams>,
  successMessage: string,
  failureMessage: string,
  setNotification: SetNotificationAction,
  clearNotification: ClearNotificationAction
) {
  const dispatch = useDispatch();
  const user = getUserFromLocalStorage();
  const [isLoading, setIsLoading] = useState(false);
  const [mutate, { isLoading: mutationLoading }] = mutationHook();

  const handleMutation = async (mutationParams: TParams) => {
    setIsLoading(true);
    try {
      const response = await mutate({
        ...mutationParams,
        jwToken: user?.token,
      });
      if ("data" in response && response.data) {
        if (response.data.success) {
          dispatch(
            setNotification({
              message: response.data.message || successMessage,
              isSuccess: true,
            })
          );
        } else {
          dispatch(
            setNotification({
              message: response.data.message || failureMessage,
              isSuccess: false,
            })
          );
        }
      }
    } catch (error) {
      dispatch(
        setNotification({ message: "An error occurred", isSuccess: false })
      );
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        dispatch(clearNotification());
      }, 1000);
    }
  };

  return [handleMutation, isLoading || mutationLoading] as const;
}

export default useMutationWithNotification;
