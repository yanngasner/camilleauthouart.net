import React from 'react'
import {Link} from "react-router-dom"

function NavigationBar() {
    return (
        <div>
           <Link to="/projets">Projets</Link>
           <Link to="/dessins">Dessins</Link>
           <Link to="/documentaires">Reportages</Link>
        </div>
    )
}

export default NavigationBar
