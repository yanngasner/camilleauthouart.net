import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Crocodiles() {

    const description = () => {
        return (
            <div>
                <h3>Coréalisation avec Mélia Gilson.</h3>
                <h3>Court métrage d'animation en papier découpé, 1min30.</h3>
                <h3>Sélection Officielle Annecy 2019.</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>"Les crocodiles du nil" fait partie d'une collection de courts métrages
                    évoquant le moment du coucher chez les bébés animaux </p>
                <p>Programme TV pour un très jeune public, diffusion prévu en 2019</p>
                <p>Production: CRIAS, JPL FILMS, 2018</p>
                <p>lien privé/mot de passe sur demande: https://vimeo.com/338657718</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Crocodiles"}
            imagesKey={'crocodiles'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
            useSlider
        />
    )
}

export default Crocodiles
