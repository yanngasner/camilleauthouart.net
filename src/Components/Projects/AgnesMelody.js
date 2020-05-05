import React from 'react'
import ProjectComponent from "./ProjectComponent";

function WorryBirds({isActive}) {

    const description = () => {
        return (
            <div>
                <h3>Court-métrage en pixilation et en stop motion, 10min</h3>
                <h3>Réalisation : Camille Authouart et Marie Larrivé</h3>
                <h3>ENSAD et 6.11 Films, 2013</h3>
                <h3>Sélection Officielle Clermont Ferrand 2014</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>« Mélodie pour Agnès » est un poème amoureux dans lequel la passion démesurée d’un
                    botaniste pour sa femme chanteuse pousse celui-ci a briser les frontières du réel et de
                    l’imaginaire, du possible et de l’impossible, de la vie et de la mort.</p>
                <p>Avec : Jean-Michel Larrivé, Isabelle Borde.
                    Musique: Maël Oudin, chant: Pauline Texier, Lumière: Simon Fillot.</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={'Mélodie pour Agnès'}
            imagesKey={'agnesMelody'}
            description={description()}
            paragraph={paragraph()}
            isActive={isActive}
            invertedProject
        />
    )
}

export default WorryBirds