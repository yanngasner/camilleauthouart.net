import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/ProjectSlider.css'
import arch1 from './Projects/resources/arch1.jpg'
import arch2 from './Projects/resources/arch2.jpg'
import arch3 from './Projects/resources/arch3.jpg'
import arch4 from './Projects/resources/arch4.jpg'
import arch5 from './Projects/resources/arch5.jpg'
import arch6 from './Projects/resources/arch6.jpg'

import Slider from 'react-slick'

function onClick()
{
  console.log('click')
}
function ProjectSlider() {

  const renderSlides = [arch1, arch2, arch3, arch4, arch5, arch6].map((image, index) => (
      <div key={index} className="slide">
        <img className="capstone" src={image} alt="Arch" onClick={onClick}/>
      </div>
    ));
    //  const renderSlides = images.map((image, index) => (
    //    <div key={index} className="slide">
    //      <h3 className="capstone">{image}</h3>
    //    </div>
    //  ));

  return (
    <div className="slider">
      <Slider dots={true} slidesToShow={1} slidesToScroll={1} 
  variableWidth={true} infinite = {true} focusOnSelect = {true}>{renderSlides}  </Slider>
    </div>
  );
}

  export default ProjectSlider
