import React from 'react'
import ProjectComponent from "./ProjectComponent";

function PostIt() {

    const description = () => {
        return (
            <div>
                <h3>Création de décors en papier et animation en stop-motion pour une publicité  de la marque Post it</h3>
                <h3>Production, Les Monstres, 2016</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Making off réalisé par Léa Troulard</p>
            </div>
        );
    }

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