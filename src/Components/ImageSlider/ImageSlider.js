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

    const minus1Image = images[(currentImage.index + images.length - 2) % images.length]
    const minus2Image = images[(currentImage.index + images.length - 3) % images.length]
    const plus1Image = images[currentImage.index % images.length]
    const plus2Image = images[(currentImage.index + images.length + 1) % images.length]

    return (
        <div className='slider-container'>
            <button className='arrow-container blue-arrow-container' onClick={() => onNextSelected(-1)}>
                <img src={invertedProject ? arrowYellowLeft : arrowGreenLeft}/>
            </button>
            <ImageSliderElement image={minus2Image} onSelected={onSelected} onNextSelected={onNextSelected}/>
            <ImageSliderElement image={minus1Image} onSelected={onSelected} onNextSelected={onNextSelected}/>
            <ImageSliderElement image={currentImage} focus={shouldFocus} onSelected={onSelected}
                                onNextSelected={onNextSelected}/>
            <ImageSliderElement image={plus1Image} onSelected={onSelected} onNextSelected={onNextSelected}/>
            <ImageSliderElement image={plus2Image} onSelected={onSelected} onNextSelected={onNextSelected}/>
            <button className='arrow-container yellow-arrow-container' onClick={() => onNextSelected(1)}>
                <img src={invertedProject ? arrowYellowRight : arrowGreenRight}/>
            </button>
        </div>
    )
}

export default ImageSlider
