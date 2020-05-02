import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Spiegelman() {

    const description = () => {
        return (
            <div>
                <h3>Impressions lithographiques de l'artiste Art Spiegelman aux ateliers Guilbaud Paris</h3>
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
            title={"Ateliers Stéphane Guilbaud : Art Spiegelman"}
            imagesKey={'spiegelman'}
            description={description()}
            paragraph={paragraph()}
        />
    )
}

export default Spiegelman