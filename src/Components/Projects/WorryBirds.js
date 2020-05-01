import React from 'react'
import ProjectComponent from "./ProjectComponent";

function WorryBirds() {

    const description = () => {
        return (
            <div>
                <h3>Coréalisation avec Marie Larrivé</h3>
                <h3>Court métrage d'animation en stop-motion et vidéoprojection</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>"Les oiseaux du Souci" s'inspire d'un poème de Jacques Prévert</p>
                <p>Il fait partie de la Collection "En Sortant de L'école" qui regroupe 13 courts métrages</p>
                <p>Ce court métrage est diffusé dans la case Ludo de France Télévision</p>
                <p>Il sera diffusé avec l'ensemble de la collection à partir du 1er Octobre 2014</p>
                <p>Production: Tant mieux production, 2014.</p>
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