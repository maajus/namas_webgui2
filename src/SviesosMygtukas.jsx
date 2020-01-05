import React from 'react';


import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class SviesosMygtukas extends React.Component {

    constructor(){
        super();
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(){
        this.props.onClick(this.props.data.idx);
    }

    render(){

        var icon = this.props.data.light ? faLightbulb : faCog;
        var activeClass = "";
        if(this.props.data.value === 1) activeClass = " active";
        return (
            <button
                className="btn btn-primary lightButton"
                onClick={this.buttonClicked}
            >
                <FontAwesomeIcon
                    className = {"lightIcon "+activeClass}
                    icon={icon}
                />
                <br/>
                <label className="lightLabel">{this.props.data.name}</label>
            </button>

        );
    }
}
