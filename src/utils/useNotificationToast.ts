import { useEffect } from "react";
import { toast } from "react-toastify";
import { Notification } from "../models/Types";

const useNotificationToast = (notification: Notification) => {
  useEffect(() => {
    if (notification.isSuccess) {
      toast.success(notification.message);
    } else if (!notification.isSuccess && notification.message) {
      toast.error(notification.message);
    }
  }, [notification]);
};

export default useNotificationToast;
