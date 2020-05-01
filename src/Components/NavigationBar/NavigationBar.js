import React, {useState, useEffect} from 'react'
import './NavigationBar.css'
import NavigationButton from './NavigationButton'
import camilleAuthouart from './../../resources/CamilleAuthouart.gif'

function NavigationBar({onSelectedComponentChanged, activeComponentId}) {

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
            <div className='inner-nav-container'>
                <div className='title-container'>
                    <img src={camilleAuthouart}/>
                </div>
                <ul>
                    <li><NavigationButton id={1} isActive={focusedButtonId >= 1 && focusedButtonId <= 4}
                                          text="Films d'anim" onClick={onClick}/></li>
                    <li><NavigationButton id={5} isActive={focusedButtonId >= 5 && focusedButtonId <= 6}
                                          text="Commandes" onClick={onClick}/>
                    </li>
                    <li><NavigationButton id={6} isActive={focusedButtonId === 7} text="Docs" onClick={onClick}/></li>
                    <li><NavigationButton id={6} isActive={focusedButtonId === 7} text="Dessins" onClick={onClick}/>
                    </li>
                </ul>
                {/*<ul>*/}
                {/*    <li><NavigationButton id={1} isActive={focusedButtonId === 1} text="La Grande Arche" onClick={onClick} /></li>*/}
                {/*    <li><NavigationButton id={2} isActive={focusedButtonId === 2} text="Morts à l'Aveugle" onClick={onClick} /></li>*/}
                {/*    <li><NavigationButton id={3} isActive={focusedButtonId === 3} text="Lac" onClick={onClick} /></li>*/}
                {/*    <li><NavigationButton id={4} isActive={focusedButtonId === 4} text="Les Crocodiles du Nil" onClick={onClick} /></li>*/}
                {/*    <li><NavigationButton id={5} isActive={focusedButtonId === 5} text="Comptines Africaines" onClick={onClick} /></li>*/}
                {/*    <li><NavigationButton id={6} isActive={focusedButtonId === 6} text="Contact" onClick={onClick} /></li>*/}
                {/*</ul>*/}
            </div>
        </div>
    )
}

export default NavigationBar
