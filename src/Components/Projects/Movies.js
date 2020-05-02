import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Movies() {

    const description = () => {
        return (
            <div>
                <h3>Pastels sur canson noir, de 12/16 cm à 20/30 cm,  2014</h3>
            </div>
        )
    }

    const paragraph = () => null

    return (
        <ProjectComponent
            title={"Movies"}
            imagesKey={'movies'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
            useSlider
        />
    )
}

export default Movies