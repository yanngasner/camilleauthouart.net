import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Crocodiles() {

    const description = () => {
        return (
            <div>
                <h3>Court-métrage d'animation TV en papier découpé, 1min30</h3>
                <h3>Réalisation : Camille Authouart et Mélia Gilson</h3>
                <h3>Production : CRIAS, JPL FILMS, 2018</h3>
                <h3>Sélection Officielle Annecy 2019</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>"Les crocodiles du nil" fait partie d'une collection de courts métrages évoquant le moment du
                    coucher chez les bébés animaux.</p>
                <p>Programme TV pour un très jeune public, 2019.</p>
                <p>Production: CRIAS, JPL FILMS, 2018.</p>
                <p>Lien privé / mot de passe sur demande : <a href='https://vimeo.com/338657718'>Viméo</a> </p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Les Crocodiles du Nil"}
            imagesKey={'crocodiles'}
            description={description()}
            paragraph={paragraph()}
            useSlider
        />
    )
}

export default Crocodiles
