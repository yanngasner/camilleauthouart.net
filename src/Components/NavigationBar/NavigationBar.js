import React, {useState, useEffect} from 'react'
import './NavigationBar.css'
import NavigationButton from './NavigationButton'
import camilleAuthouart from './../../resources/CamilleAuthouart.gif'

function NavigationBar({onSelectedComponentChanged, activeComponentId}) {

    const [focusedButtonId, setFocusedButtonId] = useState(1)

    const onClick = id => {
        onSelectedComponentChanged(id)
    }

    useEffect(() => {
        setFocusedButtonId(activeComponentId)
    }, [activeComponentId])


    return (
        <div className='nav-container'>
            <div className='inner-nav-container'>
                <div className='title-container'>
                    <img src={camilleAuthouart} alt='Logo' onClick={() => onClick(1)}/>
                </div>
                <ul>
                    <li><NavigationButton id={1} isActive={focusedButtonId >= 1 && focusedButtonId <= 6}
                                          text="Films d'animation" shortText="Films d'anim" onClick={onClick}/>
                    </li>
                    <li><NavigationButton id={7} isActive={focusedButtonId >= 7 && focusedButtonId <= 12}
                                          text="Commandes" shortText="Commandes" onClick={onClick}/>
                    </li>
                    <li><NavigationButton id={13} isActive={focusedButtonId >= 13 && focusedButtonId <= 16}
                                          text="Documentaires" shortText="Docs" onClick={onClick}/>
                    </li>
                    <li><NavigationButton id={17} isActive={focusedButtonId >= 17 && focusedButtonId <= 20}
                                          text="Dessins" shortText="Dessins" onClick={onClick}/>
                    </li>
                    <li><NavigationButton id={21} isActive={focusedButtonId >= 21 && focusedButtonId <= 21}
                                          text="Contact" shortText="Contact" onClick={onClick}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavigationBar
