import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import './loginButton.css'
import {change_display} from '../actions/index';



export default function LoginButton(){
    
    let [currentAccount, setCurrentAccount] = useState(null);

    let navigate =useNavigate();

    let dispatch = useDispatch();

    const { ethereum } = window;

    async function onClick(e){
        e.preventDefault();

        if(!ethereum){
            alert("Install Metamask or change your browser");
            return;
        }
        try{

            const accounts = await ethereum.request({method:'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);

            dispatch(change_display());

            navigate('/home')

        }catch(error){

            alert("Could not connect to the wallet");

        }

        
    }

    return(        
        <button className="loginButton" onClick={onClick}>Conectarse</button>        
    )
}