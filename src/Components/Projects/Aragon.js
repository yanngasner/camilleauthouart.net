import React from 'react'
import ProjectComponent from "./ProjectComponent";
import crocodiles1 from "../../resources/crocodiles1.jpg";

function Aragon() {

    const description = () => {
        return (
            <div>
                <h3>Oissel-sur-Seine (76), Mai 2016</h3>
                <h3>Re-création d'une fresque peinte de 110m2, devant le théatre Aragon</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>D'après une idée originale de Daniel Authouart, avec Camille Authouart, Marion Lacourt et Thierry Lopez</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Aragon"}
            imagesKey={'aragon'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
            useSlider
        />
    )
}

export default Aragon