import arch1 from './../resources/arch1.jpg';
import arch2 from './../resources/arch2.jpg';
import arch3 from './../resources/arch3.jpg';
import arch4 from './../resources/arch4.jpg';
import arch5 from './../resources/arch5.jpg';
import arch6 from './../resources/arch6.jpg';

const archImages = [
    { index: 1, src: arch1, title: 'arch1', description: '' },
    { index: 2, src: arch2, title: 'arch2', description: '' },
    { index: 3, src: arch3, title: 'arch3', description: '' },
    { index: 4, src: arch4, title: 'arch4', description: '' },
    { index: 5, src: arch5, title: 'arch5', description: '' },
    { index: 6, src: arch6, title: 'arch6', description: '' },
  ];

const imageProvider = 
(project) => {
    switch(project) {
        case 'arch' :
        return archImages;

        default :
        return null;
    }
}

export default imageProvider;
