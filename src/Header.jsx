import React from "react";
import "/Header.css";

function Header(){
    return()=>{
        <div className="header">
        <h1 className="logo">JAY COLLECTION</h1>
        <div className="header_search">
        <input className="header_searchinput" type="text"/>
        </div>
        <div className="header_nav">
        <div className="header_Option">
        <span className="header_optionline1">Guest</span>
        <span className="header_optionline1">Sign in</span>
        </div>
        <div className="header_Option">
        <span className="header_optionline1">Returns</span>
        <span className="header_optionline1">& Orders</span>
        </div>
        <div className="header_Option">
        <span className="header_optionline1">Your</span>
        <span className="header_optionline1">Prime</span>
        </div>
        </div>
        </div>
    }
}
export default Header;