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
                    <li><NavigationButton id={1} isActive={focusedButtonId >= 1 && focusedButtonId <= 4}
                                          text="Films d'anim" onClick={onClick}/>
                    </li>
                    <li><NavigationButton id={5} isActive={focusedButtonId >= 5 && focusedButtonId <= 9}
                                          text="Commandes" onClick={onClick}/>
                    </li>
                    <li><NavigationButton id={10} isActive={focusedButtonId >= 10 && focusedButtonId <= 12}
                                          text="Docs" onClick={onClick}/>
                    </li>
                    <li><NavigationButton id={13} isActive={focusedButtonId >= 13 && focusedButtonId <= 16}
                                          text="Dessins" onClick={onClick}/>
                    </li>
                    <li><NavigationButton id={17} isActive={focusedButtonId >= 17 && focusedButtonId <= 17}
                                          text="Contact" onClick={onClick}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavigationBar
