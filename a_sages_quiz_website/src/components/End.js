import React from "react"
import {Link} from "react-router-dom"

export default function End(){
    return(
    <>
        <h1>
            This is the end page
        </h1>
        <button>
            <Link to="/">Home</Link>
        </button>
    </>
    )
}