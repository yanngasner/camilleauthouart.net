import React from 'react'
import {NavLink} from "react-router-dom"
import "./NavigationBar.css" 

function NavigationBar() {
    
    return (
        <div className="container">
            <h1>
                camilleauthouart
            </h1>
            <ul>
                <li><NavLink activeClassName="active" to="/projets">Projets</NavLink></li>
                <li><NavLink activeClassName="active" to="/documentaires">Reportages</NavLink></li>
                <li><NavLink activeClassName="active" to="/dessins">Dessins</NavLink></li>
            </ul>
        </div>
        
    )
}

export default NavigationBar
