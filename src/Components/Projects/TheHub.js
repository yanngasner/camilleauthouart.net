import React from 'react'
import ProjectComponent from "./ProjectComponent";

function TheHub({isActive}) {

    const description = () => {
        return (
            <div>
                <h3>Clip animé pour le groupe The Hub, rotoscopie et vidéo-projection, 3min30</h3>
                <h3>Réalisation : Camille Authouart et Mathilde Bédouet</h3>
                <h3>Production : L’Ogre, ZRP, 2014</h3>
            </div>
        )
    }

    const paragraph = () => null

    return (
        <ProjectComponent
            title={"Aligator, The Hub"}
            imagesKey={'theHub'}
            description={description()}
            paragraph={paragraph()}
            isActive={isActive}
        />
    )
}

export default TheHub