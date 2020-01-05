import React from 'react';
import './App.css';
import './bootstrap.css';
import Kambarys from './Kambarys.jsx';

const WS_PORT = 5050;
var statusTimer;
var ws = null;
var ws_connected = false;



export default class App extends React.Component {

    constructor(){
        super();
        this.state = {};
    }


    componentDidMount(){

        this.wsConnect();
        this.wsSend = this.wsSend.bind(this);
        this.updateStatus();
        setInterval(this.updateStatus, 2000);

    }

    updateStatus(){
        if(ws != null && ws_connected)
            ws.send(JSON.stringify({cmdID:1}));
    }


    wsConnect(){

        console.log("WS connecting");
        ws=new WebSocket("ws://"+window.location.hostname+":"+WS_PORT);

        ws.binaryType = "arraybuffer";
        ws.onmessage = this.messageReceived.bind(this);
        ws.onclose = this.connectionClosed.bind(this);
        ws.onopen = this.connectionOpened.bind(this);

    }

    connectionOpened(){
        console.log("WS connection opened");
        ws_connected = true;
    }


    connectionClosed(){
        console.log("WS connection closed");
        clearInterval(statusTimer);
        ws = null;
        ws_connected = false;
        setTimeout(this.wsConnect, 5000);
    }

    buttonClicked(room_id,idx){
        this.wsSend({cmdID:2, room_id:room_id, idx:idx});
    }


    messageReceived(evt){

        if(evt.data.constructor === String){

            let receivedData = JSON.parse(evt.data);
            console.log(receivedData);
            this.setState({data:receivedData});

        }

    }

    renderRooms(){

        if(this.state.data === undefined) return;

        var send = this.wsSend;
        var click = this.buttonClicked;
        var rooms = this.state.data.map(function(room){
            return (<Kambarys key={room.room_id} data={room} wsSend={send} onClick={click}/>)
        });

        return rooms;
    }

    wsSend(data){
        if(ws != null && ws_connected)
            ws.send(JSON.stringify(data));
    }

    render(){
        return (
            <div>
                {this.renderRooms()}
            </div>
        );
    }
}

