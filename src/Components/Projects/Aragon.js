import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Aragon() {

    const description = () => {
        return (
            <div>
                <h3>Création d'une fresque peinte de 110m2, devant le Théatre
                    Aragon, à Oissel-sur-Seine (76), Mai 2016</h3>
                <h3>Idée Originale : Daniel Authouart</h3>
                <h3>Réalisation : Daniel Authouart, Camille Authouart, Marion Lacourt</h3>
            </div>
        )
    }

    const paragraph = () => null

    return (
        <ProjectComponent
            title={"Fresque Aragon"}
            imagesKey={'aragon'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
            useSlider
        />
    )
}

export default Aragon