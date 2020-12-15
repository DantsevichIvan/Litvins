import {message} from "antd";

export const successMessages = (messages: any) => {
    message.success(messages);
};
export const successMessagesError = (messagesError: any) => {
    message.error(messagesError);
};

// : any 2
