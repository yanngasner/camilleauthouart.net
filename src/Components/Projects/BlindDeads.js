import React from 'react'
import ProjectComponent from "./ProjectComponent";

function BlindDeads() {

    const description = () => {
        return (
            <div>
                <h3>Western expérimental, 90 min</h3>
                <h3>Réalisation : Julien Aubert</h3>
                <h3>Musique : Herman Dune</h3>
                <h3>TCM Cinéma et Bigger Than Fiction, 2019</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Initialement créé comme un podcast en 6 épisodes, voici l'adaptation télévisuelle de Morts à
                    l'Aveugle. Avec les voix de : Alison Wheeler, Louane, et les doubleurs français de Hugh
                    Jackman (Joel Zaffarano), Johnny Depp (Bruno Choël), George Clooney (Patrick Noerie),
                    Samuel L. Jackson (Thierry Desroses) et Clint Eastwood (Herve Jolly).</p>
                <p>Les épisodes sont disponibles sur toutes les plateformes podcast et streaming : <a
                    href='https://open.spotify.com/show/2vjJ7aZhizUgTSAgKdjqAy…'> Spotify</a></p>
            </div>
        );
    }


    return (
        <ProjectComponent
            title={"Morts à l'Aveugle"}
            imagesKey={'blindDeads'}
            description={description()}
            paragraph={paragraph()}
            useSlider
        />
    )
}

export default BlindDeads