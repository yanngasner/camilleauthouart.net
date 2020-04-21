import React from 'react'

function NavigationButton({id, text, onClick, isActive}) {
    return (
        <div className={`nav-element${isActive ? ' nav-element-active' : ''}`}>
            <button onClick={() => onClick(id)}>{text}</button>
        </div>
    )
}

export default NavigationButton
