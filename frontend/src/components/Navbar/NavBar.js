import './navbar.css';
import React from "react";
import { NavBarReg, NavBarUnreg } from '..';

export default function NavBar(  ) {
    const user = false; //pass in user prop here. check if person is a real user and display proper navbar depending on that

    if(!user) {
        return <NavBarUnreg/>
    } 
    return <NavBarReg/>
}