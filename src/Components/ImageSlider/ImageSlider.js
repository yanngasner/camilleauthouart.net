import React from 'react'
import './ImageSlider.css'
import ImageSliderElement from './ImageSliderElement'


function ImageSlider({images, currentImage, onSelectionChanged}) {

    const onSelected = image => {
        onSelectionChanged(image)
    }

    const onNextSelected = offset => {
        const image = images[(currentImage.index + offset + images.length - 1) % images.length]
        onSelectionChanged(image)
    }

    const previousImage = images[(currentImage.index + images.length - 2) % images.length]
    const nextImage = images[currentImage.index % images.length]


    return (
        <div className='slider-container'>
            <ImageSliderElement image={previousImage} onSelected={onSelected} onNextSelected={onNextSelected} />
            <ImageSliderElement image={currentImage} focus={true} onSelected={onSelected} onNextSelected={onNextSelected} />
            <ImageSliderElement image={nextImage} onSelected={onSelected} onNextSelected={onNextSelected} />
        </div>
    )
}

export default ImageSlider
