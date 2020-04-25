import React, { useState } from 'react'
import imageProvider from '../../Hooks/imageProvider'
import useShowText from '../../Hooks/useShowText'
import ImageSlider from '../ImageSlider/ImageSlider'
import ResponsivePlayer from '../ResponsivePlayer/ResponsivePlayer'

function BlindDeads() {

    const [showText, showTextLabel, toggleShowText] = useShowText(false)
    const [images] = useState(imageProvider('blindDeads'))
    const [currentImage, setCurrentImage] = useState(images[0])

    const onSelectionChanged = image => setCurrentImage(image)

    function paragraph() {
        return (showText &&
            <div>
                <p>Avec les voix de : Alison Wheeler, Louane, et les doubleurs français de Hugh Jackman (Joel Zaffarano), Johnny Depp (Bruno Choël),
                    George Clooney (Patrick Noerie), Samuel L. Jackson (Thierry Desroses) et Clint Eastwood (Herve Jolly).</p>
                <p>Dispo sur toutes les plateformes podcast et streaming<a href='https://open.spotify.com/show/2vjJ7aZhizUgTSAgKdjqAy…'> (Spotify)</a></p>
            </div>)
    }

    return (
        <div className='project-container white-project-container'>
            <div className='project-media'>
                <div className='inner-project-media'>
                    {currentImage.url ?
                        <div className='video-container'>
                            <ResponsivePlayer url={currentImage.url} />
                        </div> :
                        <div className='image-container'>
                            <img src={currentImage.src} alt={`Morts à l'Aveugle ${currentImage.index}`} />
                        </div>
                    }
                    <div className='carousel-container'>
                        <ImageSlider images={images} currentImage={currentImage} onSelectionChanged={onSelectionChanged} className='carousel-container' />
                    </div>
                </div>
            </div>
            <div className='project-text'>
                <h2>Morts à l'Aveugle</h2>
                <h3>Un western expérimental de 90 min diffusé sur TCM Cinéma. Créé comme une oeuvre audio, voici l'adaptation télévisuelle de Morts à l'Aveugle.</h3>
                <h3>Réalisation: Julien Aubert, Auteure graphique: Camille Authouart, Musique: Herman Dune.</h3>
                <button className='show-more' onClick={toggleShowText}>{showTextLabel}</button>
                {paragraph()}
            </div>
        </div>
    )
}

export default BlindDeads