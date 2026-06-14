import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Nenette() {

    const description = () => {
        return (
            <div>
                <h3>Court métrage d’animation co réalisé avec Marion Peltier.</h3>
                <h3>Produit par Les films Norfolk et Dandeloo.</h3>
                <h3>En développement,  production fin 2026.</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Synopsis</p>
                <br></br>
                <p>Chère Nénette,</p>
                <p>Séparée de ta mère vers l’âge de trois ans et déracinée de ton pays natal, tu as su t’adapter à ta condition, malgré les épreuves qui ont échelonné ta vie. Tu t’es construite ici, parmi nous. Mère de trois petits, tu es aujourd’hui arrière-grand-mère. Malgré ton arthrose tu dessines beaucoup et brosse volontiers ta frange quand on te tend un peigne. Ton histoire est celle
d’une personnalité forte, drôle, et résiliente. Et même si c’est toujours moi qui viens te voir, je n’oublie pas que tu me regardes aussi.</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={'Lettre à Nénette'}
            imagesKey={'nenette'}
            description={description()}
            paragraph={paragraph()}
            useSlider
            invertedProject
        />
    )
}

export default Nenette
