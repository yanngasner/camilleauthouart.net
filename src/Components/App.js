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

import useActiveComponent from '../Hooks/useActiveComponent'

function App() {

    const [componentRefs, activeComponentId, onSelectedComponentChanged] = useActiveComponent();

    return (
        <div className='App'>
            <NavigationBar onSelectedComponentChanged={onSelectedComponentChanged}
                           activeComponentId={activeComponentId}/>
            <div className='nav-area' ref={componentRefs[0]}/>
            <div ref={componentRefs[1]}>
                <Crocodiles isActive={activeComponentId === 1}/>
            </div>
            <div ref={componentRefs[2]}>
                <Arch isActive={activeComponentId === 2}/>
            </div>
            <div ref={componentRefs[3]}>
                <WorryBirds isActive={activeComponentId === 3}/>
            </div>
            <div ref={componentRefs[4]}>
                <AgnesMelody isActive={activeComponentId === 4}/>
            </div>
            <div ref={componentRefs[5]}>
                <BlindDeads isActive={activeComponentId === 5}/>
            </div>
            <div ref={componentRefs[6]}>
                <EuropeForReal isActive={activeComponentId === 6}/>
            </div>
            <div ref={componentRefs[7]}>
                <AfricanRhymes isActive={activeComponentId === 7}/>
            </div>
            <div ref={componentRefs[8]}>
                <PostIt isActive={activeComponentId === 8}/>
            </div>
            <div ref={componentRefs[9]}>
                <TheHub isActive={activeComponentId === 9}/>
            </div>
            <div ref={componentRefs[10]}>
                <Mediums isActive={activeComponentId === 10}/>
            </div>
            <div ref={componentRefs[11]}>
                <ArtRooms isActive={activeComponentId === 11}/>
            </div>
            <div ref={componentRefs[12]}>
                <Authouart isActive={activeComponentId === 12}/>
            </div>
            <div ref={componentRefs[13]}>
                <PlayTime isActive={activeComponentId === 13}/>
            </div>
            <div ref={componentRefs[14]}>
                <Aragon isActive={activeComponentId === 14}/>
            </div>
            <div ref={componentRefs[15]}>
                <Movies isActive={activeComponentId === 15}/>
            </div>
            <div ref={componentRefs[16]}>
                <Forests isActive={activeComponentId === 16}/>
            </div>
        </div>
    );
}

export default App
