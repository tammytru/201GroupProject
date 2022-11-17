import './navbar.css';
import React from "react";
import { NavBarReg, NavBarUnreg } from '..';

export default function NavBar( {isUser} ) {
    const isReg = isUser
    if(!isReg) {
        return <NavBarUnreg/>
    } 
    return <NavBarReg/>
}