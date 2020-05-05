import React from 'react'
import ProjectComponent from "./ProjectComponent";

function PostIt() {

    const description = () => {
        return (
            <div>
                <h3>Publicité en vidéo et stop motion pour la marque Post-it</h3>
                <h3>Réalisation : Nicolas Mongin</h3>
                <h3>Décors et animation: Camille Authouart et Lila Poppins</h3>
                <h3>Making off : Léa Troulard</h3>
                <h3>Production: Les Monstres, 2016</h3>
            </div>
        )
    }

    const paragraph = () => null

    return (
        <ProjectComponent
            title={"Post-it"}
            imagesKey={'postIt'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
            useSlider
        />
    )
}

export default PostIt