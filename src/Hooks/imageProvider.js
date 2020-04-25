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
import lake1 from './../resources/lake1.jpg'
import lake2 from './../resources/lake2.jpg'
import lake3 from './../resources/lake3.jpg'
import lake4 from './../resources/lake4.jpg'
import lake5 from './../resources/lake5.jpg'
import lake6 from './../resources/lake6.jpg'
import lake7 from './../resources/lake7.jpg'
import lake8 from './../resources/lake8.jpg'
import lake9 from './../resources/lake9.jpg'
import crocodiles1 from './../resources/crocodiles1.jpg'
import crocodiles2 from './../resources/crocodiles2.jpg'
import crocodiles3 from './../resources/crocodiles3.jpg'
import crocodiles4 from './../resources/crocodiles4.jpg'
import crocodiles5 from './../resources/crocodiles5.jpg'
import crocodiles6 from './../resources/crocodiles6.jpg'


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
  ]

  const lakeImages = [
    { index: 1, src: lake1, title: 'lake1', description: '' },
    { index: 2, src: lake2, title: 'lake2', description: '' },
    { index: 3, src: lake3, title: 'lake3', description: '' },
    { index: 4, src: lake4, title: 'lake4', description: '' },
    { index: 5, src: lake5, title: 'lake5', description: '' },
    { index: 6, src: lake6, title: 'lake6', description: '' },
    { index: 7, src: lake7, title: 'lake7', description: '' },
    { index: 8, src: lake8, title: 'lake8', description: '' },
    { index: 9, src: lake9, title: 'lake9', description: '' },
  ];

const crocodilesImages = [
    { index: 1, src: crocodiles1, title: 'crocodiles1', description: '' },
    { index: 2, src: crocodiles2, title: 'crocodiles2', description: '' },
    { index: 3, src: crocodiles3, title: 'crocodiles3', description: '' },
    { index: 4, src: crocodiles4, title: 'crocodiles4', description: '' },
    { index: 5, src: crocodiles5, title: 'crocodiles5', description: '' },
    { index: 6, src: crocodiles6, title: 'crocodiles6', description: '' },
];

const imageProvider = 
(project) => {
    switch(project) {
        case 'arch' :
        return archImages
        case 'blindDeads' :
        return blindDeadsImages
        case 'lake' :
            return lakeImages
        case 'crocodiles' :
            return crocodilesImages
        default :
        return null
    }
}

export default imageProvider
