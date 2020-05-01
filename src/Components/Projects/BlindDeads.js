import React from 'react'
import ProjectComponent from "./ProjectComponent";

function BlindDeads() {

    const description = () => {
        return (
            <div>
                <h3>Un western expérimental de 90 min diffusé sur TCM Cinéma. Créé comme une oeuvre audio, voici
                    l'adaptation télévisuelle de Morts à l'Aveugle.</h3>
                <h3>Réalisation: Julien Aubert, Auteure graphique: Camille Authouart, Musique: Herman Dune.</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Avec les voix de : Alison Wheeler, Louane, et les doubleurs français de Hugh Jackman (Joel
                    Zaffarano), Johnny Depp (Bruno Choël),
                    George Clooney (Patrick Noerie), Samuel L. Jackson (Thierry Desroses) et Clint Eastwood (Herve
                    Jolly).</p>
                <p>Dispo sur toutes les plateformes podcast et streaming<a
                    href='https://open.spotify.com/show/2vjJ7aZhizUgTSAgKdjqAy…'> (Spotify)</a></p>
            </div>
        );
    }


    return (
        <ProjectComponent
            title={"Morts à l'Aveugle"}
            imagesKey={'blindDeads'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
        />
    )
}

export default BlindDeads