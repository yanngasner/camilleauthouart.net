import React, { useState, useEffect } from 'react'
import '../../Styles/NavigationBar.css'
import NavigationButton from './NavigationButton'

function NavigationBar({ changeSelection, visible }) {

    const [activeId, setActiveId] = useState(1)

    const onClick = id => {
        setActiveId(id)
        changeSelection(id)
    }

    useEffect(() => {
        setActiveId(visible)
    }, [visible])


    return (
        <div className='nav-container'>
            <h1>
                camilleauthouart
            </h1>
            <ul>
                <li><NavigationButton id={1} isActive={activeId === 1} text="La Grande Arche" onClick={onClick} /></li>
                <li><NavigationButton id={2} isActive={activeId === 2} text="Morts à l'Aveugle" onClick={onClick} /></li>
                <li><NavigationButton id={3} isActive={activeId === 3} text="Lac" onClick={onClick} /></li>
                <li><NavigationButton id={4} isActive={activeId === 4} text="La Grande Arche" onClick={onClick} /></li>
                <li><NavigationButton id={5} isActive={activeId === 5} text="Morts à l'Aveugle" onClick={onClick} /></li>
                <li><NavigationButton id={6} isActive={activeId === 6} text="Lac" onClick={onClick} /></li>
            </ul>
        </div>

    )
}

export default NavigationBar
