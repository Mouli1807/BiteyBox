import { CART_URL } from "../utils/constants";
import { useContext, useState } from "react";
import headerImg from "../../aseet/svgviewer-png-output (1).png";
import { NavLink } from "react-router"; 
import userContext from "../utils/userContext";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Log In");

    const {loggedInUser} = useContext(userContext);
    
    return(
        <div className="flex justify-between items-center w-[80vw] mx-auto my-5 p-5 rounded-[10px] shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px] bg-[#c6a8ed]"
        >
        <div className="logo-container">
            <img className="w-[300px] h-[150px]" src={headerImg} ></img>
            
        </div>
        <div className="flex text-[30px] list-none gap-[30px] font-['Poppins',_sans-serif] font-[150]">
        <ul className="flex gap-[30px]">
        <li>
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive ? "font-bold underline text-[#492e6b]" : "text-[#492e6b]"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/about" 
                className={({ isActive }) => 
                    isActive ? "font-bold underline text-[#492e6b]" : "text-[#492e6b]"
                }
            >
                About
            </NavLink>      
        </li>
        <li>
            <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                    isActive ? "font-bold underline text-[#492e6b]" : "text-[#492e6b]"
                }
            >
                Contact Us
            </NavLink>
        </li>
        </ul>
        </div>

        <div className="w-[50px] h-[50px] mx-[20px] p-0">
            <img className="cart" src={CART_URL}/>
        </div>
        <button className="w-[10vw] h-[60px] text-white border border-[#492e6b] rounded-[10px] shadow-[rgba(0,0,0,0.3)_0px_19px_38px,rgba(0,0,0,0.22)_0px_15px_12px] 
         bg-[#492e6b] text-[20px] m-0 cursor-pointer"

        onClick={() => {
            btnNameReact === "Log In" ? 
            setbtnNameReact("Log Out") : setbtnNameReact("Log In")
        }}  >{btnNameReact}</button>
        <div className="text-2xl font-bold ">{loggedInUser}</div>
    </div>

    );
    
};
export default Header;