import { FormNotificationProps } from "../../models/Types";

const FormNotification: React.FC<FormNotificationProps> = ({ message, isSuccess }) => {
    const notificationClass = isSuccess ? 'success' : 'error';

    return (
        <div className="flex justify-center mt-2">
            <span className={`notification notification--${notificationClass}`}>{message}</span>
        </div>
    );
};

export default FormNotification;