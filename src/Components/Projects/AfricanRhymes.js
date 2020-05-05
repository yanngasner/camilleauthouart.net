import React from 'react'
import ProjectComponent from "./ProjectComponent";

function AfricanRhymes({isActive}) {

    const description = () => {
        return (
            <div>
                <h3>Clips animés pour comptines centrafricaines, 2D
                    numérique, 5 x 2min</h3>
                <h3>Réalisation : Camille Authouart</h3>
                <h3>ARB Music Label, 2016</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Comptines d’Afrique travaille avec des musiciens de nombreux pays d’Afrique francophone,
                    pour répertorier les comptines de chaque pays et le faire partager au monde entier. Les
                    chansons sont adaptée aux maternelles, petits et bébés.</p>
                <p>Découvrez plus de musique traditionnelle et de jeux de doigts pour la récréation ici :
                    <a href='http://bit.ly/2S1Ec7u'> Youtube</a></p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={'Comptines Africaines'}
            imagesKey={'africanRhymes'}
            description={description()}
            paragraph={paragraph()}
            isActive={isActive}
            useSlider
        />
    )
}

export default AfricanRhymes