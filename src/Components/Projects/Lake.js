import React, {useState} from 'react'
import imageProvider from '../../Hooks/imageProvider'
import useShowText from '../../Hooks/useShowText'
import ImageSlider from '../ImageSlider/ImageSlider'

function Lake() {

    const [showText, showTextLabel, toggleShowText] = useShowText(false)
    const [images] = useState(imageProvider('lake'))
    const [currentImage, setCurrentImage] = useState(images[0])

    const onSelectionChanged = image => setCurrentImage(image)

    function paragraph() {
        return (showText &&
            <div>
                <p>C’était au mois d’Août. 
                    Il faisait chaud sur les routes et les fenêtres ouvertes du vieux Combi VW laissaient s’engouffrer un doux parfum de liberté. 
                    Arrivés au camping du Grand Lac, Alix et ses amis se délectent des premières heures de vacances avec l’insouciance et la légèreté de leur jeunesse. 
                    Mais lorsqu’Alix apprend que le lac va être vidé, elle est bousculée dans ses certitudes. Que cachent les eaux sombres du Grand Lac? 
                    À mesure que l’eau se retire et révèle un paysage oublié, la jeune femme en quête de réponses va entreprendre malgé elle un véritable parcours aux frontières de l’invisible, 
                    entre le monde de la surface et celui des profondeurs...</p>
            </div>)
    }

    return (
        <div className='project-container light-project-container'> 
            <div className='project-text'>
                <h2>Au bord du Lac</h2>
                <h3>Au bord du lac est un projet de court métrage d'animation en volume.</h3>
                <h3>Réalisation Camille Authouart, Production JPL Films.</h3>
                <h3>Actuellement en développement, ce projet vient d'obtenir le soutien du CNC pour l'aide à l'innovation.</h3>
                <button className='show-more' onClick={toggleShowText}>{showTextLabel}</button>
                {paragraph()}    
            </div>  
            <div className='project-media'>
                <div className='inner-project-media'>
                    <div className='image-container'>
                        <img src={currentImage.src} alt={`Lac ${currentImage.index}`}/>
                    </div>
                    <div className='carousel-container'>
                        <ImageSlider images={images} currentImage={currentImage} onSelectionChanged={onSelectionChanged} className='carousel-container'/>
                    </div>
                </div>
            </div> 
        </div> 
    )
}

export default Lake
