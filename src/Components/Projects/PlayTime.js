import React from 'react'
import ProjectComponent from "./ProjectComponent";

function PlayTime({isActive}) {

    const description = () => {
        return (
            <div>
                <h3>Série de pastels sur papier noir intitulée « Playtime » en
                    hommage au film de Jacques Tati</h3>
                <h3>De 12/16cm à 50/65 cm. Exposés à la Galerie Rollin (Rouen)
                    en 2016</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>C’est un lieu aux multiples facettes.</p>
                <p>Un lieu contrasté où se cotoient rigueur et merveilleux.</p>
                <p>Ici, la verticale de verre et d’acier se brise devant un bourgeon fragile.
                    La géométrie parfaite explose dans un reflet. Les lumières vibantes se prennent pour des étoiles.
                    Ici j’aime marcher longtemps, me perdre même, à la recherche du magique dans l’ordinaire.
                    Et parfois trouver dans les reflets de ce monde, une autre réalité.</p>
            </div>
        );
    }

    return (
        <ProjectComponent
            title={"Playtime"}
            imagesKey={'playTime'}
            description={description()}
            paragraph={paragraph()}
            isActive={isActive}
            useSlider
        />
    )
}

export default PlayTime