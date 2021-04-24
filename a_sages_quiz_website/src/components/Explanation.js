import React from "react"
import {Link} from "react-router-dom"

export default function Explanation(option){
    var nextSenarioNo = option.location.state.senarioNo + 1
    var scores = localStorage.getItem("sageScore")
    console.log("next senario number"+nextSenarioNo.toString())
    return(
        <>
        <h1>{option.location.state.optionQuote}</h1>
        <h1>{option.location.state.optionExplanation}</h1>
        <h1>{option.location.state.optionSage}</h1>
        <p>{scores}</p>
        <button><Link to={{pathname:"/senario/"+nextSenarioNo.toString()}}>Next</Link></button>
        </>
    )
}