import React, {useRef} from 'react'
import './App.css'

import NavigationBar from './NavigationBar/NavigationBar'

import Arch from './Projects/Arch'
import BlindDeads from './Projects/BlindDeads'
import Lake from './Projects/Lake'
import Crocodiles from "./Projects/Crocodiles";
import AfricanRhymes from "./Projects/AfricanRhymes";

import useActiveComponent from '../Hooks/useActiveComponent'

function App() {

    const [componentRefs, activeComponentId, onSelectedComponentChanged] = useActiveComponent(6);

    return (
        <div className='App'>
            <NavigationBar onSelectedComponentChanged={onSelectedComponentChanged}
                           activeComponentId={activeComponentId}/>
            <div className='nav-area' ref={componentRefs[0]}/>
            <div ref={componentRefs[1]}>
                <Arch/>
            </div>
            <div ref={componentRefs[2]}>
                <BlindDeads/>
            </div>
            <div ref={componentRefs[3]}>
                <Lake/>
            </div>
            <div ref={componentRefs[4]}>
                <Crocodiles/>
            </div>
            <div ref={componentRefs[5]}>
                <AfricanRhymes/>
            </div>
            <div ref={componentRefs[6]}>
            </div>
        </div>
    );
}

export default App
