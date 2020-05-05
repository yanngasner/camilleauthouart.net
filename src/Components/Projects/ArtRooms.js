import React from 'react'
import ProjectComponent from "./ProjectComponent";

function ArtRooms() {

    const description = () => {
        return (
            <div>
                <h3>Collection de 4 mini documentaires sur les ateliers d’art
                    parisien avec les artistes : Art Spiegelman, Hervé Di Rosa
                    et Damien Deroubaix</h3>
                <h3>Réalisation : Camille Authouart et Léa Troulard</h3>
                <h3>En partenariat avec Mel Publisher, 2016 à 2018</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Films réalisés avec l’aimable participation de l’Atelier Stéphane Guilbaud:
                    avec Stéphane Guilbaud, Thomas Marin, Martin Renucci, Mathilde Busch.</p>
                <p>Ainsi que l’Atelier René Tazé, avec Bérangère Lipreau.</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Ateliers d'Art"}
            imagesKey={'artRooms'}
            description={description()}
            paragraph={paragraph()}
            useSlider
        />
    )
}

export default ArtRooms