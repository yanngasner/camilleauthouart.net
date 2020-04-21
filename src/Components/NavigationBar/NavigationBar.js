import React, { useState, useEffect } from 'react'
import '../../Styles/NavigationBar.css'
import NavigationButton from './NavigationButton'

function NavigationBar({ onSelectedComponentChanged, activeComponentId }) {

    const [focusedButtonId, setFocusedButtonId] = useState(1)

    const onClick = id => {
        setFocusedButtonId(id)
        onSelectedComponentChanged(id)
    }

    useEffect(() => {
        setFocusedButtonId(activeComponentId)
    }, [activeComponentId])


    return (
        <div className='nav-container'>
            <h1>
                camilleauthouart
            </h1>
            <ul>
                <li><NavigationButton id={1} isActive={focusedButtonId === 1} text="La Grande Arche" onClick={onClick} /></li>
                <li><NavigationButton id={2} isActive={focusedButtonId === 2} text="Morts à l'Aveugle" onClick={onClick} /></li>
                <li><NavigationButton id={3} isActive={focusedButtonId === 3} text="Lac" onClick={onClick} /></li>
                <li><NavigationButton id={4} isActive={focusedButtonId === 4} text="La Grande Arche" onClick={onClick} /></li>
                <li><NavigationButton id={5} isActive={focusedButtonId === 5} text="Morts à l'Aveugle" onClick={onClick} /></li>
                <li><NavigationButton id={6} isActive={focusedButtonId === 6} text="Lac" onClick={onClick} /></li>
            </ul>
        </div>

    )
}

export default NavigationBar
