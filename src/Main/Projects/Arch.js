import React, {useState} from 'react'
import arch from './resources/arch.jpg'

function Arch() {

    const [expanded, setExpanded] = useState(false);

    function paragraph() {
        return (expanded &&
            <div>
                <p>Actuellement en développement, ce projet a bénéficié d'une résidence d'écriture à l'Abbaye de Fontevraud,
            obtenu le FAIA du CNC et sera présent aux Pitchs des festivals d'animation de Rennes et d'Annecy 2019</p>
                <p>L’histoire se déroule à la Défense, à Paris. </p>
                <p>Dans l’ombre de ce quartier austère, symbole de puissance et de modernité, se cachent deux poètes :
            un homme sans maison et une gigantesque Araignée de métal rouge.</p>
                <p>Durant la journée, ils sont comme invisible, si petits parmi les gratte-ciels. Mais c’est la nuit,
                quand tout semble désert et que les étoiles se confondent avec les fenêtres des plus hautes tours,
            qu’on les observe le mieux ...</p>
            </div>)
    }

    return (
        <div className="project-container light-project-container"> 
            <div className="project-text">
                <h2>La Grande Arche</h2>
                <h3>La Grande Arche est un projet de court métrage d'animation en 2D traditionnelle et numérique.
                    MIYU Productions 2019</h3>
                <button className="show-more" onClick={() => setExpanded(prev => !prev)}>{expanded ? "Hide" :"Show more"}</button>
                {paragraph()}    
            </div>  
            <div className="project-media">
                <img className="image" src={arch} alt="Arch"/>
            </div> 
        </div> 
    )
}

export default Arch
