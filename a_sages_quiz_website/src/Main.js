import React from "react"
import {Switch, Route} from "react-router-dom"
import Start from "./components/Start"
import Senario from './components/Senario'
import End from './components/End'
import Explanation from './components/Explanation';


export default function Main(){
    return(
        <Switch>
            <Route exact path="/" component={Start}/>
            <Route path="/senario" component={Senario}/>
            <Route path="/explanation" component={Explanation}/>
            <Route path="/end" component={End}/>
        </Switch>
    )
}