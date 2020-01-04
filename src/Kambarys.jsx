import React from 'react';
import SviesosMygtukas from './SviesosMygtukas.jsx'

import { faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default class Kambarys extends React.Component {



    send(){
        console.log("send");
    }

    render(){
        return (
            <div className="jumbotron">
                <div className = "d-flex">
                    <label className="p-2 nopadding"> Kambarys </label>

                    <div className="p-2 nopadding" style={{marginLeft:"20px"}}>
                        <FontAwesomeIcon icon={faThermometerThreeQuarters} />
                        <label style={{paddingLeft:"5px"}}> 32 C</label>
                    </div>

                    <div className="p-2 nopadding" style={{marginLeft:"20px"}}>
                        <FontAwesomeIcon icon={faTint} />
                        <label style={{paddingLeft:"5px"}}> 35 %</label>
                    </div>
                </div>

                    <div className = "d-flex">

                        <div className = "p-2">
                            <SviesosMygtukas onClick={this.buttonClicked}/>
                        </div>

                    </div>
            </div>
        );
    }
}
