import './navbar.css';
import React, { useEffect } from "react";
import { NavBarReg, NavBarUnreg } from '..';

export default function NavBar( {isUser, userID} ) {
    if(!isUser && userID === -1) {
        return <NavBarUnreg/>
    } 
    return <NavBarReg/>
}