import './navbar.css';
import React from "react";
import { NavBarReg, NavBarUnreg } from '..';

export default function NavBar( {isUser, userID} ) {
    // const isAuth = localStorage.getItem('isUser')
    // if(!isUser && userID === -1) {
    if(localStorage.getItem('isUser')) {
        return <NavBarReg/>
        
    } 
    return <NavBarUnreg/>
}