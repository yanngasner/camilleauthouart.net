import {useState} from 'react'

function useShowText(initialShowText) {

    const [showText, setShowText] = useState(initialShowText);

    const showTextLabel = showText ? "Hide" : "Show more"
    const changeShowText = () => setShowText(previous => !previous);

    return [showText, showTextLabel, changeShowText]
}

export default useShowText
