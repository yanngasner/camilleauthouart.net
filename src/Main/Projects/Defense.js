import React from 'react'
import './Projects.css';
import './Defense.css';
import arch from './resources/arch.jpg'

function Defense() {
    return (
        <div className="session light-session defense-container"> 
            <div className="defense-text">
                <h1>La Grande Arche</h1>
                <h2>La Grande Arche est un projet de court métrage d'animation en 2D traditionnelle et numérique</h2>
                <h2>Réalisation Camille Authouart, MIYU Productions</h2>
                <h2>Actuellement en développement, ce projet a bénéficié d'une résidence d'écriture à l'Abbaye de Fontevraud, 
                    obtenu le FAIA du CNC et sera présent aux Pitchs des festivals d'animation de Rennes et d'Annecy 2019</h2>

                <p>L’histoire se déroule à la Défense, à Paris. </p>
                <p>Dans l’ombre de ce quartier austère, symbole de puissance et de modernité, se cachent deux poètes : 
                    un homme sans maison et une gigantesque Araignée de métal rouge.</p>
                <p>Durant la journée, ils sont comme invisible, si petits parmi les gratte-ciels. Mais c’est la nuit, 
                    quand tout semble désert et que les étoiles se confondent avec les fenêtres des plus hautes tours, 
                    qu’on les observe le mieux ...</p>
            </div>  
            <div className="defense-images">
                <img className="defense-image" src={arch} alt="Arch"/>
            </div> 
        </div> 
    )
}

export default Defense
