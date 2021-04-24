import React from "react"
import {Link} from "react-router-dom"
import {incrementSenarioNo} from "../services/logic"

export default function Explanation(option){
    var nextSenarioNo = option.location.state.senarioNo + 1
    var scores = localStorage.getItem("sageScore")
    var senariosTracker = localStorage.getItem("senarios")
    var currSenarioNo = parseInt(JSON.parse(senariosTracker).currSenarioNo)
    var totalSenarios = parseInt(JSON.parse(senariosTracker).totalSenarios)
    if (currSenarioNo>=totalSenarios){
        return(
            <>
            <h1>{option.location.state.optionQuote}</h1>
            <h1>{option.location.state.optionExplanation}</h1>
            <h1>{option.location.state.optionSage}</h1>
            <p>{scores}</p>
            <p>{senariosTracker}</p>
            <button><Link to={{pathname:"/end"}}>Finish</Link></button>
            </>
        )
    }else{
        return(
            <>
            <h1>{option.location.state.optionQuote}</h1>
            <h1>{option.location.state.optionExplanation}</h1>
            <h1>{option.location.state.optionSage}</h1>
            <p>{scores}</p>
            <p>{senariosTracker}</p>
            <button onClick={()=> incrementSenarioNo()}><Link to={{pathname:"/senario/"+nextSenarioNo.toString()}}>Next</Link></button>
            </>
        )
    }
}