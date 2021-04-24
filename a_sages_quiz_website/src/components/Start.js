import React,{useEffect} from "react"
import {Link} from "react-router-dom"
import senarios from "../data/Senarios.json"

export default function Start(){

    useEffect(()=>{
        localStorage.setItem('sageScore', JSON.stringify({
            "Non-Sage":0,
            "Mencius":0,
            "Lao Zi" :0,
            "Sankara":0,
        }));
        localStorage.setItem('senarios', JSON.stringify({
            "currSenarioNo":0,
            "totalSenarios":Object.keys(senarios).length
        }));
    },[]);/*empty array to call use effect function only once*/

    return(
        <>
        <h1>A Sages Quiz: How Sagely Are You</h1>
        <Link to="/senario/1">Start Now</Link>
        </>
    )
}