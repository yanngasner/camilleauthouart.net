import React from 'react'
import './App.css'

import NavigationBar from './NavigationBar/NavigationBar'

import Nenette from './Projects/Nenette'
import Lake from './Projects/Lake'
import Arch from './Projects/Arch'
import Crocodiles from "./Projects/Crocodiles";
import WorryBirds from "./Projects/WorryBirds";
import AgnesMelody from "./Projects/AgnesMelody";

import Aif from './Projects/Aif'
import BlindDeads from './Projects/BlindDeads'
import EuropeForReal from "./Projects/EuropeForReal";
import AfricanRhymes from "./Projects/AfricanRhymes";
import PostIt from "./Projects/PostIt";
import TheHub from "./Projects/TheHub";

import Mediums from "./Projects/Mediums";
import ArtRooms from "./Projects/ArtRooms";
import Authouart from "./Projects/Authouart";
import FatherOrArtist from './Projects/FatherOrArtist'

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
                <Nenette/>
            </div>
            <div ref={componentRefs[3]}>
                <Crocodiles/>
            </div>
            <div ref={componentRefs[4]}>
                <Lake/>
            </div>
            <div ref={componentRefs[5]}>
                <WorryBirds/>
            </div>
            <div ref={componentRefs[6]}>
                <AgnesMelody/>
            </div>
            <div ref={componentRefs[7]}>
                <FatherOrArtist/>
            </div>
            <div ref={componentRefs[8]}>
                <Authouart/>
            </div>
            <div ref={componentRefs[9]}>
                <ArtRooms/>
            </div>
            <div ref={componentRefs[10]}>
                <Mediums/>
            </div>
            <div ref={componentRefs[11]}>
                <Aif/>
            </div>
            <div ref={componentRefs[12]}>
                <PostIt/>
            </div>
            <div ref={componentRefs[13]}>
                <BlindDeads/>
            </div>
            <div ref={componentRefs[14]}>
                <EuropeForReal/>
            </div>
            <div ref={componentRefs[15]}>
                <AfricanRhymes/>
            </div>
            <div ref={componentRefs[16]}>
                <TheHub/>
            </div>
            
            <div ref={componentRefs[17]}>
                <PlayTime/>
            </div>
            <div ref={componentRefs[18]}>
                <Aragon/>
            </div>
            <div ref={componentRefs[19]}>
                <Movies/>
            </div>
            <div ref={componentRefs[20]}>
                <Forests/>
            </div>
            <div ref={componentRefs[21]}>
                <Contact/>
            </div>
        </div>
    );
}

export default App
