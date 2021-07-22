// Challenge

/*
    ! Create a boilerplate of a Logout component.
    * After completion, create an image tag that has:
        * id of logout
        * class of logout
        * alt of power button
        * a src that links to an image that will be imported, called logoutPic
    
    ! BE DONE 9:45AM
*/

import React from "react"
import "./logout.css"
import logoutPic from "../../../assets/powerButton.png"


const Logout = props => {

    return (
        <div>
            <img src={logoutPic} 
            alt="power-btn" 
            id="logout" 
            className="logout"
            onClick={props.clearSession} />
        </div>
    )
}

export default Logout