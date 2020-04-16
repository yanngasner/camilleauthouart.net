import React from 'react'
import {Switch, Route} from "react-router-dom"
import Projects from "./Projects/Projects"
import Drawings from "./Drawings"
import Documentaries from "./Documentaries"

function Main() {
    return (
        <div>
           <Switch>
               <Route exact path="/"> <Projects /> </Route>
               <Route exact path="/projets"> <Projects /> </Route>
               <Route exact path="/dessins"> <Drawings /> </Route>
               <Route exact path="/documentaires"> <Documentaries /> </Route>
           </Switch>
        </div>
    )
}

export default Main
