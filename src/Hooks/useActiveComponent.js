import { useState, useRef, useEffect } from 'react'

function useActiveComponent(activeComponentsCount) {

    const ref0 = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const componentsRef = [ref0, ref1, ref2, ref3, ref4, ref5, ref6]
    // const getComponentsRef = () => {
        //cannot useRef in a loop, fixed implem for 6 components
        //fixed for 5 components
        //workaround not suitable : one ref per component needed
        //const componentsRef = useRef([])
        //componentsRef.current = new Array(activeComponentsCount)
    // }

    const [activeComponentId, setActiveComponentId] = useState(1)

    //provides the offset of the sticky navbar;
    const getNavOffset = () => componentsRef[0].current
        ? componentsRef[0].current.offsetHeight + componentsRef[0].current.offsetTop
        : 0

    //autoscroll to the selected component div
    const onSelectedComponentChanged = id => {
        const navOffset = getNavOffset()
        if (componentsRef[id].current) {
            var offsetTop = componentsRef[id].current.offsetTop
            offsetTop = offsetTop - navOffset
            window.scroll({ top: offsetTop, behavior: "smooth" })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    //on scroll, set the active component regarding the scroll position
    const handleScroll = () => {
        const navOffset = getNavOffset();
        for (var i = 1; i < activeComponentsCount; i++) {
            const refCurrent = componentsRef[i].current
            if (!refCurrent)
                return
            var divMiddle = refCurrent.offsetTop + refCurrent.offsetHeight / 2
            divMiddle = divMiddle - navOffset;
            if (window.scrollY <= divMiddle) {
                setActiveComponentId(i)
                return
            }
        }
        setActiveComponentId(activeComponentsCount)
    }

    // return :
    //- the refs to provide to the components div
    //- the active component to be displayed in the navbar
    //- the on selection component changed callback raised from the navbar
    return [componentsRef, activeComponentId, onSelectedComponentChanged]
}

export default useActiveComponent
