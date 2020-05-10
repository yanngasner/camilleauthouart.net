import React from 'react'
import './App.css'

import NavigationBar from './NavigationBar/NavigationBar'

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
                <Crocodiles/>
            </div>
            <div ref={componentRefs[2]}>
                <Arch/>
            </div>
            <div ref={componentRefs[3]}>
                <WorryBirds/>
            </div>
            <div ref={componentRefs[4]}>
                <AgnesMelody/>
            </div>
            <div ref={componentRefs[5]}>
                <BlindDeads/>
            </div>
            <div ref={componentRefs[6]}>
                <EuropeForReal/>
            </div>
            <div ref={componentRefs[7]}>
                <AfricanRhymes/>
            </div>
            <div ref={componentRefs[8]}>
                <PostIt/>
            </div>
            <div ref={componentRefs[9]}>
                <TheHub/>
            </div>
            <div ref={componentRefs[10]}>
                <Mediums/>
            </div>
            <div ref={componentRefs[11]}>
                <ArtRooms/>
            </div>
            <div ref={componentRefs[12]}>
                <Authouart/>
            </div>
            <div ref={componentRefs[13]}>
                <PlayTime/>
            </div>
            <div ref={componentRefs[14]}>
                <Aragon/>
            </div>
            <div ref={componentRefs[15]}>
                <Movies/>
            </div>
            <div ref={componentRefs[16]}>
                <Forests/>
            </div>
            <div ref={componentRefs[17]}>
                <Contact/>
            </div>
        </div>
    );
}

export default App
