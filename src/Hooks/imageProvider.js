import arch1 from './../resources/arch1.jpg'
import arch2 from './../resources/arch2.jpg'
import arch3 from './../resources/arch3.jpg'
import arch4 from './../resources/arch4.jpg'
import arch5 from './../resources/arch5.jpg'
import arch6 from './../resources/arch6.jpg'
import blindDeads1 from './../resources/blindDeads1.jpg'
import blindDeads2 from './../resources/blindDeads2.jpg'
import blindDeads3 from './../resources/blindDeads3.jpg'
import blindDeads4 from './../resources/blindDeads4.JPG'
import crocodiles1 from './../resources/crocodiles1.jpg'
import crocodiles2 from './../resources/crocodiles2.jpg'
import crocodiles3 from './../resources/crocodiles3.jpg'
import crocodiles4 from './../resources/crocodiles4.jpg'
import crocodiles5 from './../resources/crocodiles5.jpg'
import crocodiles6 from './../resources/crocodiles6.jpg'
import africanRhymes1 from './../resources/africanRhymes1.jpg'
import africanRhymes2 from './../resources/africanRhymes2.jpg'
import africanRhymes3 from './../resources/africanRhymes3.jpg'
import africanRhymes4 from './../resources/africanRhymes4.jpg'
import africanRhymes5 from './../resources/africanRhymes5.jpg'
import worryBirds1 from './../resources/worryBirds1.jpg'
import agnesMelody1 from './../resources/agnesMelody1.jpg'
import europeForReal1 from './../resources/europeForReal1.jpg'
import postIt1 from './../resources/postIt1.jpg'
import postIt2 from './../resources/postIt2.jpg'
import postIt3 from './../resources/postIt3.jpg'
import postIt4 from './../resources/postIt4.jpg'
import postIt5 from './../resources/postIt5.jpg'
import postIt6 from './../resources/postIt6.jpg'
import postIt7 from './../resources/postIt7.jpg'
import postIt8 from './../resources/postIt8.jpg'
import postIt9 from './../resources/postIt9.jpg'
import theHub1 from './../resources/theHub1.jpg'

const archImages = [
    { index: 1, src: arch1, title: 'arch1', description: '' },
    { index: 2, src: arch2, title: 'arch2', description: '' },
    { index: 3, src: arch3, title: 'arch3', description: '' },
    { index: 4, src: arch4, title: 'arch4', description: '' },
    { index: 5, src: arch5, title: 'arch5', description: '' },
    { index: 6, src: arch6, title: 'arch6', description: '' },
  ]

const blindDeadsImages = [
{ index: 1, src: blindDeads1, title: 'blindDeads1', description: '' },
{ index: 2, src: blindDeads2, title: 'blindDeads2', description: '' },
{ index: 3, src: blindDeads3, title: 'blindDeads3', description: '' },
{ index: 4, src: blindDeads4, title: 'blindDeads4', description: '', url: 'https://www.youtube.com/watch?v=kcTKkJz5H-o' },
];

const crocodilesImages = [
    { index: 1, src: crocodiles1, title: 'crocodiles1', description: '' },
    { index: 2, src: crocodiles2, title: 'crocodiles2', description: '' },
    { index: 3, src: crocodiles3, title: 'crocodiles3', description: '' },
    { index: 4, src: crocodiles4, title: 'crocodiles4', description: '' },
    { index: 5, src: crocodiles5, title: 'crocodiles5', description: '' },
    { index: 6, src: crocodiles6, title: 'crocodiles6', description: '' },
];

const africanRhymesImages = [
    { index: 1, src: africanRhymes1, title: 'africanRhymes1', description: '', url: 'https://www.youtube.com/watch?v=lq8bH9YbftU' },
    { index: 2, src: africanRhymes2, title: 'africanRhymes2', description: '', url: 'https://www.youtube.com/watch?v=wLZfh7eSPVY' },
    { index: 3, src: africanRhymes3, title: 'africanRhymes3', description: '', url: 'https://www.youtube.com/watch?v=Fm-nqlO98tg' },
    { index: 4, src: africanRhymes4, title: 'africanRhymes4', description: '', url: 'https://www.youtube.com/watch?v=PsQqYLw9Bt8' },
    { index: 5, src: africanRhymes5, title: 'africanRhymes5', description: '', url: 'https://www.youtube.com/watch?v=NgmywN8GTic' },
]

const worryBirdsImages = [
    { index: 1, src: worryBirds1, title: 'worryBirds1', description: '', url: 'https://www.youtube.com/watch?v=xkG4wtIHT-w' },
]

const agnesMelodyImages = [
    { index: 1, src: agnesMelody1, title: 'agnesMelody1', description: '', url: 'https://vimeo.com/172420408' },
]

const europeForRealImages = [
    { index: 1, src: europeForReal1, title: 'europeForReal1', description: '', url: 'https://www.youtube.com/watch?v=eVNfFt_cssk' },
]

const theHubImages = [
    { index: 1, src: theHub1, title: 'theHub1', description: '', url: 'https://www.youtube.com/watch?v=n6J_AQEbFcM' },
]

const postItImages = [
    { index: 1, src: postIt1, title: 'postIt1', description: '', url: 'https://vimeo.com/188803957' },
    { index: 2, src: postIt2, title: 'postIt2', description: '', url: 'https://vimeo.com/172425375' },
    { index: 3, src: postIt3, title: 'postIt3', description: '' },
    { index: 4, src: postIt4, title: 'postIt4', description: '' },
    { index: 5, src: postIt5, title: 'postIt5', description: '' },
    { index: 6, src: postIt6, title: 'postIt6', description: '' },
    { index: 7, src: postIt7, title: 'postIt7', description: '' },
    { index: 8, src: postIt8, title: 'postIt8', description: '' },
    { index: 9, src: postIt9, title: 'postIt9', description: '' },
]

const imageProvider =
(project) => {
    switch(project) {
        case 'arch' :
        return archImages
        case 'blindDeads' :
        return blindDeadsImages
        case 'crocodiles' :
            return crocodilesImages
        case 'africanRhymes' :
            return africanRhymesImages
        case 'worryBirds' :
            return worryBirdsImages
        case 'agnesMelody' :
            return agnesMelodyImages
        case 'europeForReal' :
            return europeForRealImages
        case 'postIt' :
            return postItImages
        case 'theHub' :
            return theHubImages
        default :
        return null
    }
}

export default imageProvider
