import React from "react"
import "./navbar.css"
import piePic from "../../assets/blueberry-pie.webp"
import Logout from "./Logout/Logout"

const Navbar = (props) => {

    return (
        <div>
            <nav>
                <img src={piePic} alt="pie" id="piePic" />
                <Logout clearSession={props.clearSession}/>
            </nav>
        </div>
    )
}

export default Navbar