import React from 'react';
import './App.css';
import './bootstrap.css';
import Kambarys from './Kambarys.jsx';

const WS_PORT = 5050;
var statusTimer;
var ws = null;
var ws_connected = false;



function wsConnect(){

    console.log("WS connecting");
    ws=new WebSocket("ws://"+window.location.hostname+":"+WS_PORT);

    ws.binaryType = "arraybuffer";
    ws.onmessage = messageReceived;
    ws.onclose = connectionClosed;
    ws.onopen = connectionOpened;

}

function connectionOpened(){
    console.log("WS connection opened");
    ws_connected = true;
}


function connectionClosed(){
    console.log("WS connection closed");
    clearInterval(statusTimer);
    ws = null;
    ws_connected = false;
    setTimeout(function(){wsConnect()}, 5000);
}




function messageReceived(evt){


    if(evt.data.constructor === String){

        let receivedData = JSON.parse(evt.data);
        console.log(receivedData);

        switch(receivedData.cmdID){

        }

    }

}

function wsSend(data){

    if(ws != null && ws_connected)
        ws.send(JSON.stringify(data));
}


export default class App extends React.Component {

    componentDidMount(){

        wsConnect();

    }

    send(){
        console.log("send");
        wsSend({cmdID:1});
    }

    render(){
        return (
            <div>
                <button onClick={this.send}> test </button>
            <Kambarys wsSend={wsSend}/>
</div>
        );
    }
}

