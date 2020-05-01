import React from 'react'
import ProjectComponent from "./ProjectComponent";

function AfricanRhymes() {

    const description = () => {
        return (
            <div>
                <h3>Clips pour comptines centrafricaines</h3>
                <h3>ARB Music Label</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <p>5 clips réalisés en 2d numérique, 2016</p>
        );
    }


    return (
        <ProjectComponent
            title={'Comptines Africaines'}
            imagesKey={'africanRhymes'}
            description={description()}
            paragraph={paragraph()}
        />
    )
}

export default AfricanRhymes