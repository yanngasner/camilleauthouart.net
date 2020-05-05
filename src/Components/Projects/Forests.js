import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Forests() {

    const description = () => {
        return (
            <div>
                <h3>Série de pastels sur papier noir, de 12/16 cm à 20/30 cm,
                    2014</h3>
            </div>
        )
    }

    const paragraph = () => null

    return (
        <ProjectComponent
            title={"Forêts"}
            imagesKey={'forests'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
            useSlider
        />
    )
}

export default Forests