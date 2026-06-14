import React from 'react'
import ProjectComponent from "./ProjectComponent";

function Aif() {

    const description = () => {
        return (
            <div>
                <h3>Pour son édition 2025, le festival Animation is Film m’a confié la création de son affiche. </h3>
                <h3>Le cahier des charges étant de mettre en avant les techniques traditionnelles, j’ai imaginé une affiche en papier découpé.</h3>
            </div>
        )
    }

    const paragraph = () => {
        return (
            <div>
                <p>Le concept artistique est le suivant :</p>
                <br></br>
                <p>À travers l’image que je propose pour l’affiche de AIF 2025, 
                    je ne cherche pas à représenter le monde 
                    mais j’invite le spectateur à le regarder différemment et à participer à son réenchantement collectif.
                </p>
                <p>
                    Car il suffit parfois de s’arrêter un instant, 
                    de s’approcher un peu plus pour redécouvrir les merveilles du monde.
                </p>
                <br></br>
                <p>ANIMATION IS FILM FESTIVAL, Los Angeles, du 17 au 19 Octobre 2025.</p>
            </div>
        );
    }


    return (
        <ProjectComponent
            title={"Animation Is Film"}
            imagesKey={'aif'}
            description={description()}
            paragraph={paragraph()}
            useSlider
        />
    )
}

export default Aif