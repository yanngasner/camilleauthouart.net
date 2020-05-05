import React, {useRef, useEffect} from 'react'
import './ImageSlider.css'

function ImageSliderElement({image, onSelected, focus, onNextSelected, hidden}) {
    
    const selectedRef = useRef(null)
    
    const onClick = () => {
        onSelected(image)
        if (focus) {
            setTimeout(() => {
                if (selectedRef && selectedRef.current) {
                    selectedRef.current.focus()
                }
            }, 10)
        }
    }

    useEffect(() => {
        if (focus) {
            if (selectedRef && selectedRef.current) {
                selectedRef.current.focus()
            }
        }
    }, [focus])

    const onKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            onNextSelected(1)
        }
        if (e.key === 'ArrowLeft') {
            onNextSelected(-1)
        }
    }

    return (
        <div className={`${hidden ? 'hidden-':''}slider-image-container`}>
            {hidden ? <span></span> : <img ref={selectedRef} className='slider-image' src={image.src} alt={`slide ${image.index}`}
                tabIndex={image.index}
                onClick={onClick} onKeyDown={onKeyDown} />}
        </div>
    )
}

export default ImageSliderElement
