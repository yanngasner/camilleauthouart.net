import React from 'react'
import '../Styles/App.css'
import '../Styles/Projects.css'
import NavigationBar from './NavigationBar/NavigationBar'

import Arch from './Projects/Arch'
import BlindDeads from './Projects/BlindDeads'
import Lake from './Projects/Lake'

function App() {

  return (
    <div className='App'>
      <NavigationBar/>
      <div className='nav-area'/>
      <Arch />
      <BlindDeads />
      <Lake />
    </div>
  );
}

export default App
