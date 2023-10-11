import React from 'react'
import './App.css'

import NavigationBar from './NavigationBar/NavigationBar'

import Lake from './Projects/Lake'
import Arch from './Projects/Arch'
import Crocodiles from "./Projects/Crocodiles";
import WorryBirds from "./Projects/WorryBirds";
import AgnesMelody from "./Projects/AgnesMelody";

import BlindDeads from './Projects/BlindDeads'
import EuropeForReal from "./Projects/EuropeForReal";
import AfricanRhymes from "./Projects/AfricanRhymes";
import PostIt from "./Projects/PostIt";
import TheHub from "./Projects/TheHub";

import Mediums from "./Projects/Mediums";
import ArtRooms from "./Projects/ArtRooms";
import Authouart from "./Projects/Authouart";

import PlayTime from "./Projects/PlayTime";
import Aragon from "./Projects/Aragon";
import Movies from "./Projects/Movies";
import Forests from "./Projects/Forests";

import Contact from "./Projects/Contact";

import useActiveComponent from '../Hooks/useActiveComponent'

function App() {

    const [componentRefs, activeComponentId, onSelectedComponentChanged] = useActiveComponent();

    return (
        <div className='App'>
            <NavigationBar onSelectedComponentChanged={onSelectedComponentChanged}
                           activeComponentId={activeComponentId}/>
            <div className='nav-area' ref={componentRefs[0]}/>
            <div ref={componentRefs[1]}>
                <Arch/>
            </div>
            <div ref={componentRefs[2]}>
                <Crocodiles/>
            </div>
            <div ref={componentRefs[3]}>
                <Lake/>
            </div>
            <div ref={componentRefs[4]}>
                <WorryBirds/>
            </div>
            <div ref={componentRefs[5]}>
                <AgnesMelody/>
            </div>
            <div ref={componentRefs[6]}>
                <BlindDeads/>
            </div>
            <div ref={componentRefs[7]}>
                <EuropeForReal/>
            </div>
            <div ref={componentRefs[8]}>
                <AfricanRhymes/>
            </div>
            <div ref={componentRefs[9]}>
                <PostIt/>
            </div>
            <div ref={componentRefs[10]}>
                <TheHub/>
            </div>
            <div ref={componentRefs[11]}>
                <Authouart/>
            </div>
            <div ref={componentRefs[12]}>
                <ArtRooms/>
            </div>
            <div ref={componentRefs[13]}>
                <Mediums/>
            </div>
            <div ref={componentRefs[14]}>
                <PlayTime/>
            </div>
            <div ref={componentRefs[15]}>
                <Aragon/>
            </div>
            <div ref={componentRefs[16]}>
                <Movies/>
            </div>
            <div ref={componentRefs[17]}>
                <Forests/>
            </div>
            <div ref={componentRefs[18]}>
                <Contact/>
            </div>
        </div>
    );
}

export default App
