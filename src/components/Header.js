import { CART_URL } from "../utils/constants";
import { useState } from "react";
import headerImg from "../../aseet/svgviewer-png-output (1).png";
import { NavLink } from "react-router"; 

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Log In");
    
    return(
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={headerImg} ></img>
            
        </div>
        <div className="nav-items">
                <ul>
                    <li>
                        <NavLink to="/" className="nav-item" activeclassname="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-item" activeclassname="active">About</NavLink>      
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-item" activeclassname="active">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        <div className="cart">
            <img className="cart" src={CART_URL}/>
        </div>
        <button className="sign-btn" 
        onClick={() => {
            btnNameReact === "Log In" ? 
            setbtnNameReact("Log Out") : setbtnNameReact("Log In")
        }}  >{btnNameReact}</button>
    </div>
    );
    
};
export default Header;