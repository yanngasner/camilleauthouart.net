import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Authouart({isActive}) {

    const description = () => {
        return (
            <div>
                <h3>Red Fish, mini documentaire, 7min...</h3>
                <h3>Suivi d'une collection de 4 mini clips de 2min30, préparation de
                    l’exposition Art Élysées, 2016.</h3>
                <h3>Réalisation : Camille Authouart, 2014 et 2016</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>RED FISH: film réalisé en Mai 2014 dans le cadre de l'impression de la lithographie Red Fish de
                    Daniel Authouart. Film réalisé à l’atelier de l’artiste, ainsi qu’à l’Atelier Stéphane Guilbaud.</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Collection Daniel Authouart"}
            imagesKey={'authouart'}
            description={description()}
            paragraph={paragraph()}
            isActive={isActive}
            invertedProject
            useSlider
        />
    )
}

export default Authouart