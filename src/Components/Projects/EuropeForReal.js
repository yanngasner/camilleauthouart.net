import React from 'react'
import ProjectComponent from "./ProjectComponent";

function EuropeForReal() {

    const description = () => {
        return (
            <div>
                <h3>Websérie animée pour RFI, 2min15</h3>
                <h3>Épisode 2, En Italie, les médias mentent-ils?</h3>
                <h3>Réalisation : Camille Authouart</h3>
                <h3>RFI 2018</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>En Belgique, Bulgarie, Italie, Lituanie, Pologne et Autriche,
                    les journalistes d'Accents d'Europe - RFI ont répertorié six idées reçues entendues à l’approche des
                    élections européennes</p>
                <p>Le résultat une websérie illustrée qui démêle le vrai du faux. 6 épisodes / 6 illustrateurs.</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"RFI / L'Europe en Vrai"}
            imagesKey={'europeForReal'}
            description={description()}
            paragraph={paragraph()}
            invertedProject
        />
    )
}

export default EuropeForReal