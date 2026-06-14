import React from 'react'
import ProjectComponent from "./ProjectComponent";

function FatherOrArtist() {

    const description = () => {
        return (
            <div>
                <h3>Réalisation d’un film de 52 minutes, mêlant documentaire et animation</h3>
                <h3>Produit par Lux for Film et Amopix, diffusé sur FR3 Régions, 2026.</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Synopsis</p>
                <br></br>
                <p>Longtemps je me suis représenté mon père, le peintre Daniel Authouart, à la manière d’un personnage de Sempé : 
                    un être doux, rêveur et un peu naïf. 
                    Je sais désormais que c’est grâce à la pratique de son art qu’il est parvenu à canaliser ses névroses et à dominer une grande noirceur. 
                    En décembre 2023 mon père est victime d’un avc. Depuis les médecins sont formels :
                     il ne pourra plus jamais conduire mais avec la rééducation, il peut espérer lire de nouveau.</p>
                <p>Et peindre se demande l’artiste ?</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Le Père ou l'Artiste"}
            imagesKey={'fatherOrArtist'}
            description={description()}
            paragraph={paragraph()}
            useSlider
        />
    )
}

export default FatherOrArtist