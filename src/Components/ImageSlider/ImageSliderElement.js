import React, {useRef} from 'react'
import './ImageSlider.css'

function ImageSliderElement({image, onSelected, focus, onNextSelected}) {
    
    const selectedRef = useRef(null)
    
    const onClick = () => {
        onSelected(image)
    }

    const onKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            onNextSelected(1)
        }
        if (e.key === 'ArrowLeft') {
            onNextSelected(-1)
        }
    }

    if (focus) {
        setTimeout(() => {
            if (selectedRef && selectedRef.current) {
                selectedRef.current.focus()
            }
        }, 10)
    }

    return (
        <div className='slider-image-container'>
            <img ref={selectedRef} className='slider-image' src={image.src} alt={`slide ${image.index}`}
                tabIndex={image.index}
                onClick={onClick} onKeyDown={onKeyDown} />
        </div>
    )
}

export default ImageSliderElement
