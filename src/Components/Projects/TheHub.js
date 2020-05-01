import React from 'react'
import ProjectComponent from "./ProjectComponent";

function TheHub() {

    const description = () => {
        return (
            <div>
                <h3>Coréalisé avec Mathilde Bédouet</h3>
                <h3>Clip pour le groupe The HUB</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Technique: 2D numérique, rotoscopie et vidéoprojection</p>
                <p>Production: L'OGRE, ZRP, 2014</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Aligator, The Hub"}
            imagesKey={'theHub'}
            description={description()}
            paragraph={paragraph()}
        />
    )
}

export default TheHub