import React from 'react'
import ProjectComponent from "./ProjectComponent";
import crocodiles1 from "../../resources/crocodiles1.jpg";

function Authouart() {

    const description = () => {
        return (
            <div>
                <h3>Red Fish, ou le rêve incontrôlé de Daniel Authouart</h3>
                <h3>Réalisation Camille Authouart, 2014</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Film réalisé en Mai 2014 dans le cadre de l'impression de la lithographie Red Fish de Daniel Authouart</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Collection Daniel Authouart"}
            imagesKey={'authouart'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
            useSlider
        />
    )
}

export default Authouart