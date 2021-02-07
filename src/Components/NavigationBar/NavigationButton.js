import React from 'react'

function NavigationButton({id, text, shortText, onClick, isActive}) {
    return (
        <div className={`nav-element${isActive ? ' nav-element-active' : ''}`}>
            <button onClick={() => onClick(id)}>
                <span className="nav-full">{text}</span><span className="nav-short">{shortText}</span>
            </button>
        </div>
    )
}

export default NavigationButton
