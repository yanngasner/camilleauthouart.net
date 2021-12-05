import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Mediums() {

    const description = () => {
        return (
            <div>
                <h3>Documentaire 52 min (prises de vue réelle et animation)</h3>
                <h3>Réalisation : Camille Authouart et Léa Troulard</h3>
                <h3>Lardux Films, France Télévisions</h3>
                <h3>Diffusé en Janvier 2021 sur France 3 Régions</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>«Comment Christophe a t-il su pour l’accident de moto ? Et Isabelle pour la cabane dans la forêt ? Et David pour la chanson de Dire Straits ?» </p>
                <p>Anaïs a 30 ans. Elle qui ne s’est jamais posé la question de la vie après la mort accepte, à notre demande, de partir à la rencontre de cinq médiums qui communiquent avec l’au-delà.</p>
                <p>Mais que voient-ils, qu’entendent-ils vraiment ? Au fil des rencontres d’Anaïs, les histoires des médiums se racontent, le passé d’Anaïs ressurgit et nos certitudes sont mises à l’épreuve.</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Médiums"}
            imagesKey={'mediums'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
        />
    )
}

export default Mediums