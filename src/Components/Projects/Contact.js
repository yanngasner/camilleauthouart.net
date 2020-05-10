import React from 'react';
import camille from './../../resources/camille.jpg'


function Contact() {
    return (
        <div className={'project-container regular-project-container'}>
            <div className={'contact-container'}>
                <h2>Contact</h2>
                <img src={camille}  alt='camille'/>
                <h3>camille.authouart@hotmail.fr</h3>
            </div>
        </div>
    )
}

export default Contact;