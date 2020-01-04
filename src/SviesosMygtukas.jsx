import React from 'react';


import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class SviesosMygtukas extends React.Component {

    render(){
        return (
            <button
                className="btn btn-primary lightButton"
                onClick={this.props.onClick}
            >
                <FontAwesomeIcon
                    className = "lightIcon active"
                    icon={faLightbulb}
                />
                <label className="lightLabel">Simos pusė</label>
            </button>

        );
    }
}
