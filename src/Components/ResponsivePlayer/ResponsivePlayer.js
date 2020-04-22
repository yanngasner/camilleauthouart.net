import React from 'react'
import ReactPlayer from 'react-player'
import './ResponsivePlayer.css'

function ResponsivePlayer ({url, imageSrc}) {
    
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            light
          />
        </div>
      )
  }

  export default ResponsivePlayer