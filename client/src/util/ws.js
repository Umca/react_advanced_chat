import {connectedNewUser, disconnectedUser, newMessage} from 'actions/index';

import store from 'store/index';

export default ((url)=>{

    let  ws = new WebSocket(url);

    const {dispatch} = store;

    ws.onopen = () => {
        console.log('WS opened');
    };

    ws.onmessage = (message) => {
        console.log(message);
        const messageObj = JSON.parse(message.data);

        console.log(13, messageObj);

        switch(messageObj.type){
            case "connected_new_user":
                dispatch(connectedNewUser(messageObj.data, messageObj.userId));
                break;
            case "disconnected_user":
                dispatch(disconnectedUser(messageObj.userId));
                break;
            case "message":
                dispatch(newMessage(messageObj.userId, messageObj.author, messageObj.text,messageObj.time))
        }
    };

    let reconnectCount = 0;
    const emit = (message) => {
        if(reconnectCount > 5) return;
        if(ws.readyState == ws.CONNECTING){
            setTimeout(()=>{
                emit(message);
                reconnectCount++;
            }, 500);

            return;
        }
        ws.send(message);
        reconnectCount = 0;
    }

    return {emit};

})('ws://localhost:3000');




