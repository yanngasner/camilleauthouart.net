import React, { useState, useRef, useEffect } from 'react'
import '../Styles/App.css'
import '../Styles/Projects.css'
import NavigationBar from './NavigationBar/NavigationBar'

import Arch from './Projects/Arch'
import BlindDeads from './Projects/BlindDeads'
import Lake from './Projects/Lake'

function App() {

  const archRef = useRef(null);
  const blindDeadsRef = useRef(null);
  const lakeRef = useRef(null);
  const archRef2 = useRef(null);
  const blindDeadsRef2 = useRef(null);
  const lakeRef2 = useRef(null);
  const navAreaRef = useRef(null);

  const refs = [archRef, blindDeadsRef, lakeRef, archRef2, blindDeadsRef2, lakeRef2]
  const [visible, setVisible] = useState(1);

  const changeSelection = id => {
    if (refs[id - 1].current && navAreaRef) {
      var offsetTop = refs[id - 1].current.offsetTop;
      offsetTop = offsetTop - navAreaRef.current.offsetTop - navAreaRef.current.offsetHeight;
      window.scroll({ top: offsetTop, behavior: "smooth" });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const handleScroll = () => {
    for (var i = 1; i < 6; i++) {
      const divRef = refs[i - 1]
      if (!(divRef.current && navAreaRef))
        return
      var divMiddle = divRef.current.offsetTop + divRef.current.offsetHeight / 2;
      divMiddle = divMiddle - navAreaRef.current.offsetTop - navAreaRef.current.offsetHeight;
      if (window.scrollY <= divMiddle) {
        setVisible(i)
        return
      }
    }
    setVisible(6)
  }

  return (
    <div className='App'>
      <NavigationBar changeSelection={changeSelection} visible={visible} />
      <div className='nav-area' ref={navAreaRef} />
      <div ref={archRef}>
        <Arch index={1} divRef={archRef} />
      </div>
      <div ref={blindDeadsRef}>
        <BlindDeads index={2} divRef={blindDeadsRef} />
      </div>
      <div ref={lakeRef}>
        <Lake index={3} divRef={lakeRef} />
      </div>
      <div ref={archRef2}>
        <Arch index={4} divRef={archRef2} />
      </div>
      <div ref={blindDeadsRef2}>
        <BlindDeads index={5} divRef={blindDeadsRef2} />
      </div>
      <div ref={lakeRef2}>
        <Lake index={6} divRef={lakeRef2} />
      </div>
    </div>
  );
}

export default App
