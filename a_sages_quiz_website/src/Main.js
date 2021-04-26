import React from "react"
import {Switch, Route} from "react-router-dom"
import Start from "./components/Start"
import Senario from './components/Senario'
import End from './components/End'
import Explanation from './components/Explanation';
import Material_UI_senario from "./components/material_UI_demo";
import Material_UI_start from "./components/material_UI_demo";

export default function Main(){
    return(
        <Switch>
            <Route exact path="/" component={Start}/>
            <Route path="/senario/:id" component={Senario}/>
            <Route path="/explanation" component={Explanation}/>
            <Route path="/end" component={End}/>
        </Switch>
    )
}