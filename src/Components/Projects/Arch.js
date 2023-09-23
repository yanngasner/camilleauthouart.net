import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Arch() {

    const description = () => {
        return (
            <div>
                <h3>Court-métrage d'animation en 2D traditionnelle et numérique, 12 min</h3>
                <h3>Réalisation : Camille Authouart</h3>
                <h3>MIYU Productions, 2022</h3>
                <h3>Sélections : Annecy 2023, Clermont-Ferrand 2023, IFFR 2022, ...</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Ce projet a bénéficié d'une résidence d'écriture à l'Abbaye de
                    Fontevraud, obtenu le FAIA du CNC et a été présenté aux sessions de Pitchs des festivals
                    d'animation de Rennes et d'Annecy.</p>
                <br></br>
                <p>L’histoire se déroule à la Défense, à Paris. </p>
                <p>Dans l’ombre de ce quartier austère, symbole de puissance et de modernité, se cachent deux
                    poètes : un homme sans maison et une gigantesque Araignée de métal rouge.</p>
                <p>Durant la journée, ils sont comme invisible, si petits parmi les gratte-ciels. Mais c’est la nuit,
                    quand tout semble désert et que les étoiles se confondent avec les fenêtres des plus hautes
                    tours, qu’on les observe le mieux ...</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={'La Grande Arche'}
            imagesKey={'arch'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
            useSlider
        />
    )
}

export default Arch
