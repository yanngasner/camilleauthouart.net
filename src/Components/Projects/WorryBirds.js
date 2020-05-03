import React from 'react'
import ProjectComponent from "./ProjectComponent";

function WorryBirds() {

    const description = () => {
        return (
            <div>
                <h3>Court-métrage d'animation TV en stop-motion, 3min</h3>
                <h3>Réalisation : Camille Authouart et Marie Larrivé</h3>
                <h3>Tant mieux production, France Télévisions, 2014</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>« Les oiseaux du Souci" est une adaptation du poème de Jacques Prévert. Il fait partie de la
                    collection En Sortant de L'école, Saison 1. Diffusion France 3 et France télévision, tout public.</p>
                <p><a href='https://fr.wikipedia.org/wiki/En_sortant_de_l%27%C3%A9cole'> Lien Wikipedia</a></p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={'Les Oiseaux du Souci'}
            imagesKey={'worryBirds'}
            description={description()}
            paragraph={paragraph()}
        />
    )
}

export default WorryBirds