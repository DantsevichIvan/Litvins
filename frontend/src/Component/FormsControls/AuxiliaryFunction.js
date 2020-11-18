import {message} from "antd";

export const successMessages = (messages) => {
    message.success(messages);
};
export const successMessagesError = (messagesError) => {
    message.error(messagesError);
};