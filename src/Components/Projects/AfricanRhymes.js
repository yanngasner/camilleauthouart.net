import React, {useState} from 'react'
import imageProvider from '../../Hooks/imageProvider'
import useShowText from '../../Hooks/useShowText'
import ImageSlider from '../ImageSlider/ImageSlider'
import ResponsivePlayer from '../ResponsivePlayer/ResponsivePlayer'

function AfricanRhymes() {

    const [showText, showTextLabel, toggleShowText] = useShowText(false)
    const [images] = useState(imageProvider('africanRhymes'))
    const [currentImage, setCurrentImage] = useState(images[0])

    const onSelectionChanged = image => setCurrentImage(image)

    function paragraph() {
        return (showText &&
            <div>
                <p>5 clips réalisés en 2d numérique, 2016</p>
            </div>)
    }

    return (
        <div className='project-container light-project-container'>
            <div className='project-text'>
                <h2>Comptines Africaines</h2>
                <h3>Clips pour comptines centrafricaines</h3>
                <h3>ARB Music Label</h3>
                <button className='show-more' onClick={toggleShowText}>{showTextLabel}</button>
                {paragraph()}
            </div>
            <div className='project-media'>
                <div className='media-container'>
                    <div className='inner-media-container'>
                        <div className='image-container'>
                            <img src={currentImage.src} alt={`Comptines Africaines ${currentImage.index}`}/>
                        </div>
                    </div>
                </div>
                <div className='carousel-container'>
                    <ImageSlider images={images} currentImage={currentImage} onSelectionChanged={onSelectionChanged}/>
                </div>
            </div>
        </div>
    )
}

export default AfricanRhymes