import React, {useState} from 'react'
import './ImageSlider.css'
import ImageSliderElement from './ImageSliderElement'
import arrowGreenLeft from './../../resources/arrow-left-green.png'
import arrowGreenRight from './../../resources/arrow-right-green.png'
import arrowYellowLeft from './../../resources/arrow-left-yellow.png'
import arrowYellowRight from './../../resources/arrow-right-yellow.png'


function ImageSlider({images, currentImage, onSelectionChanged, invertedProject}) {

    const [shouldFocus, setShouldFocus] = useState(false);

    const onSelected = image => handleSelectionChanged(image)

    const onNextSelected = offset => {
        const image = images[(currentImage.index + offset + images.length - 1) % images.length]
        handleSelectionChanged(image)
    }

    const handleSelectionChanged = image => {
        onSelectionChanged(image)
        setShouldFocus(true)
        setTimeout(() => setShouldFocus(false), 10)
    }

    const getImage = offset => images[(currentImage.index + images.length + offset - 1) % images.length]

    return (
        <div className='slider-container'>
            <button className='arrow-container blue-arrow-container' onClick={() => onNextSelected(-1)}>
                <img src={invertedProject ? arrowYellowLeft : arrowGreenLeft} alt='arrow'/>
            </button>
            <ImageSliderElement image={getImage(-4)} hidden/>
            <ImageSliderElement image={getImage(-3)} hidden/>
            <ImageSliderElement image={getImage(-2)} onSelected={onSelected} onNextSelected={onNextSelected}/>
            <ImageSliderElement image={getImage(-1)} onSelected={onSelected} onNextSelected={onNextSelected}/>
            <ImageSliderElement image={currentImage} focus={shouldFocus} onSelected={onSelected}
                                onNextSelected={onNextSelected}/>
            <ImageSliderElement image={getImage(1)} onSelected={onSelected} onNextSelected={onNextSelected}/>
            <ImageSliderElement image={getImage(2)} onSelected={onSelected} onNextSelected={onNextSelected}/>
            <ImageSliderElement image={getImage(3)} hidden/>
            <ImageSliderElement image={getImage(4)} hidden/>
            <button className='arrow-container yellow-arrow-container' onClick={() => onNextSelected(1)}>
                <img src={invertedProject ? arrowYellowRight : arrowGreenRight} alt='arrow'/>
            </button>
        </div>
    )
}

export default ImageSlider
