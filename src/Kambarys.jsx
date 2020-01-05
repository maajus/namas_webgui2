import React from 'react';
import SviesosMygtukas from './SviesosMygtukas.jsx'

import { faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default class Kambarys extends React.Component {

    constructor(){
        super();
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    send(){
        console.log("send");
    }

    buttonClicked(idx){
        this.props.onClick(this.props.data.room_id, idx);
    }

    renderButtons(){
        if(this.props.data.lights === undefined) return;

        var clickFun = this.buttonClicked;
        var buttons = this.props.data.lights.map(function(button){
            return (
                <div className="p-2" key={button.idx}>
                    <SviesosMygtukas data={button} onClick={clickFun} />
                </div>)
        }
        );

        return buttons;
    }

    render(){
        return (
            <div className="jumbotron">
                <div className = "d-flex">
                    <label className="p-2 nopadding roomLabel"> {this.props.data.name} </label>

                    <div className="p-2 nopadding" style={{marginLeft:"20px"}}>
                        <FontAwesomeIcon icon={faThermometerThreeQuarters} />
                        <label style={{paddingLeft:"5px"}}> {this.props.data.temp}°C</label>
                    </div>

                    <div className="p-2 nopadding" style={{marginLeft:"20px"}}>
                        <FontAwesomeIcon icon={faTint} />
                        <label style={{paddingLeft:"5px"}}> {this.props.data.humi} %</label>
                    </div>
                </div>

                    <div className = "d-flex flex-wrap">

                            {this.renderButtons()}

                    </div>
            </div>
        );
    }
}
