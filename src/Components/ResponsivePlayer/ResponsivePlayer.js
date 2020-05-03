import React from 'react'
import ReactPlayer from 'react-player'
import './ResponsivePlayer.css'
import {isIOS} from "react-device-detect";

function ResponsivePlayer ({url, light}) {
    
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            light={light}
            controls={!isIOS}
          />
        </div>
      )
  }

  export default ResponsivePlayer