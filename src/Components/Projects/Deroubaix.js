import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Deroubaix() {

    const description = () => {
        return (
            <div>
                <h3>Impressions lithographiques de l'artiste Damien Deroubaix aux ateliers Guilbaud Paris et Bergerac.</h3>
                <h3>Réalisation: Camille Authouart et Léa Troulard, 2017</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={'Ateliers Stéphane Guilbaud : Damien Deroubaix'}
            imagesKey={'deroubaix'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
        />
    )
}

export default Deroubaix