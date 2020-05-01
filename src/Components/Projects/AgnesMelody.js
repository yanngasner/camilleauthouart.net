import React from 'react'
import ProjectComponent from "./ProjectComponent";

function WorryBirds() {

    const description = () => {
        return (
            <div>
                <h3>Coréalisation avec Marie Larrivé</h3>
                <h3>Mélodie pour Agnès est un court-métrage d’une dizaine de minutes entièrement réalisé en pixilation et en stop motion</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Melodie pour Agnes est un poème amoureux dans lequel la passion démesurée d’un botaniste pour sa femme chanteuse
                    pousse celui-ci a briser les frontières du réel et de l’imaginaire, du possible et de l’impossible, de la vie et de la mort</p>
                <p>Production: ENSAD et 6.11 Films, 2013</p>
            </div>
        );
    }


    return (
        <ProjectComponent
            title={'Mélodie pour Agnès'}
            imagesKey={'agnesMelody'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
        />
    )
}

export default WorryBirds