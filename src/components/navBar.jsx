import { useSelector } from "react-redux"
import LoginButton from "./loginButton"
import './navBar.css'
import SwapButton from "./swapButton"


export default function NavBar(){

    let displayState = useSelector((state) => state.displayState)

    return<>
    <div className="navDiv">
        <div className="div1">{!displayState && <LoginButton/>}</div>

        <div className="div2"><h2 className="div2H2"> My Dapp </h2></div> 

        <div className="div3">{displayState && <SwapButton/>}</div>
        
    </div>
    
    </>
}