((url)=>{

    let  ws = new WebSocket(url);

    ws.onopen = () => {
        console.log('WS opened');
    };

    ws.onmessage = (data) => {
        console.log(data);
    };

    console.log(ws)

    return ws;

})('ws://localhost:3000');




