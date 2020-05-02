import React, {useState} from 'react';
import useShowText from "../../Hooks/useShowText";
import imageProvider from "../../Hooks/imageProvider";
import ImageSlider from "../ImageSlider/ImageSlider";
import ResponsivePlayer from '../ResponsivePlayer/ResponsivePlayer'

function ProjectComponent({imagesKey, title, description, paragraph, invertedProject, useSlider}) {

    const [showText, showTextLabel, toggleShowText] = useShowText(false)
    const [images] = useState(imageProvider(imagesKey))
    const [currentImage, setCurrentImage] = useState(images[0])

    const onSelectionChanged = image => setCurrentImage(image)

    function displayedParagraph() {
        return (showText && paragraph)
    }

    const projectText = () => {
        return (
            <div className='project-text'>
                <h2>{title}</h2>
                {description}
                <button className='show-more' onClick={toggleShowText}>{showTextLabel}</button>
                <div className='project-paragraph'>
                    {displayedParagraph()}
                </div>
            </div>
        )
    }

    const projectMedia = () => {
        return (
            <div className='project-media'>
                <div className='media-container'>
                    <div className='inner-media-container'>
                        {currentImage.url ?
                            <div className='video-container'>
                                <ResponsivePlayer url={currentImage.url} light={currentImage.src}/>
                            </div> :
                            <div className='image-container'>
                                <img src={currentImage.src} alt={`${title} ${currentImage.index}`}/>
                            </div>
                        }
                    </div>
                </div>
                {useSlider && <div className='carousel-container'>
                    <ImageSlider images={images} currentImage={currentImage} onSelectionChanged={onSelectionChanged} invertedProject={invertedProject}/>
                </div>}
            </div>
        )
    }
    return (
        <div className={`project-container ${invertedProject ? 'goofy' : 'regular'}-project-container`}>
            {invertedProject ? projectMedia() : projectText()}
            {invertedProject ? projectText() : projectMedia()}
        </div>
    );
}

export default ProjectComponent;