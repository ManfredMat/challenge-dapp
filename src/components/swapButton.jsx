import { useState } from "react";
import { useNavigate } from "react-router";
import './loginButton.css'

export default function SwapButton(){
    
    let navigate =useNavigate();
    let [position , setPosition] = useState(false)

    function onClick(e){
        e.preventDefault();
        navigate(position? '/home' : '/store')
        setPosition(!position)  
    }

    return(        
        <button className="loginButton" onClick={onClick}>{position? 'Go Home' : 'Go Store'}</button>        
    )
}