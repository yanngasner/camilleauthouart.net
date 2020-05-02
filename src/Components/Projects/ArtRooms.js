import React from 'react'
import ProjectComponent from "./ProjectComponent";

function ArtRooms() {

    const description = () => {
        return (
            <div>
                <h3>Collection de documentaires sur des ateliers d'art</h3>
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
            title={"Ateliers d'Art"}
            imagesKey={'artRooms'}
            description={description()}
            paragraph={paragraph()}
            useSlider
        />
    )
}

export default ArtRooms