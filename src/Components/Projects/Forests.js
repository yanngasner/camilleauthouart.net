import React from 'react'
import ProjectComponent from "./ProjectComponent";
import crocodiles1 from "../../resources/crocodiles1.jpg";

function Forests() {

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
            title={"Forêts"}
            imagesKey={'forests'}
            description={description()}
            paragraph={paragraph()}
            useSlider
        />
    )
}

export default Forests