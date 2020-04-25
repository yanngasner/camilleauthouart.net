import React, { useState } from 'react'
import imageProvider from '../../Hooks/imageProvider'
import useShowText from '../../Hooks/useShowText'
import ImageSlider from '../ImageSlider/ImageSlider'

function Crocodiles() {

    const [showText, showTextLabel, toggleShowText] = useShowText(false)
    const [images] = useState(imageProvider('crocodiles'))
    const [currentImage, setCurrentImage] = useState(images[0])

    const onSelectionChanged = image => setCurrentImage(image)

    function paragraph() {
        return (showText &&
            <div>
                <p>"Les crocodiles du nil" fait partie d'une collection de courts métrages
                    évoquant le moment du coucher chez les bébés animaux </p>
                <p>Programme TV pour un très jeune public, diffusion prévu en 2019</p>
                <p>Production: CRIAS, JPL FILMS, 2018</p>
                <p>lien privé/mot de passe sur demande: https://vimeo.com/338657718</p>
            </div>)
    }

    return (
            <div className='project-container white-project-container'>
                <div className='project-media'>
                    <div className='inner-project-media'>
                        <div className='image-container'>
                            <img src={currentImage.src} alt={`Crocodiles ${currentImage.index}`} />
                        </div>
                        <div className='carousel-container'>
                            <ImageSlider images={images} currentImage={currentImage} onSelectionChanged={onSelectionChanged} className='carousel-container' />
                        </div>
                    </div>
                </div>
                <div className='project-text'>
                    <h2>Les Crocodiles du Nil</h2>
                    <h3>Coréalisation avec Mélia Gilson.</h3>
                    <h3>Court métrage d'animation en papier découpé, 1min30.</h3>
                    <h3>Sélection Officielle Annecy 2019.</h3>
                    <button className='show-more' onClick={toggleShowText}>{showTextLabel}</button>
                    {paragraph()}
                </div>
        </div>
    )
}

export default Crocodiles
