/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class ChatModel {
    constructor() {

    }

    async addChatData(message, author) {
        const socket = new WebSocket('ws://localhost:7777');

        socket.onopen = function () {
            const sendMessageEvent = {
                type: 'SEND_MESSAGE',
                payload: {
                    author: `${author}`,
                    message: `${message}`,
                },
            };

            const json = JSON.stringify(sendMessageEvent);

            socket.send(json);
        };

        socket.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            console.log(newMessage.payload.message);
            newMessage.payload.author = author;
            newMessage.payload.message = message;
            return { message, author };
        };

        socket.onerror = (event) => {
            console.log('onerror', event);
        };

        socket.onclose = (event) => {
            console.log('onclose', event);
        };
    }
}
