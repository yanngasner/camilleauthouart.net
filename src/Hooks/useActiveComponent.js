import { useState, useRef, useEffect } from 'react'

function useActiveComponent(activeComponentsCount) {

    const ref0 = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)
    const ref9 = useRef(null)
    const componentsRef = [ref0, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9]
    // const getComponentsRef = () => {
        //cannot useRef in a loop, fixed implem for a predefined components count
        //workaround not suitable : one ref per component needed
        //const componentsRef = useRef([])
        //componentsRef.current = new Array(activeComponentsCount)
    // }

    //provides the active component ref
    const [activeComponentId, setActiveComponentId] = useState(1)

    //provides the offset of the sticky navbar;
    const [navOffset, setNavOffset] = useState(0)

    //autoscroll to the selected component div
    const onSelectedComponentChanged = id => {
        if (componentsRef[id].current) {
            let offsetTop = componentsRef[id].current.offsetTop;
            offsetTop = offsetTop - navOffset
            window.scroll({ top: offsetTop, behavior: "smooth" })
        }
    }

    useEffect( () => {
        setNavOffset(componentsRef[0].current ? componentsRef[0].current.offsetHeight : 0)
    }, [componentsRef])

    useEffect(() => {
        //on scroll, set the active component regarding the scroll position
        const handleScroll = (componentsRef, activeComponentsCount, navOffset) => {
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

        window.addEventListener('scroll', () => handleScroll(componentsRef, activeComponentsCount, navOffset))

        return () => {
            window.removeEventListener('scroll', () => handleScroll(componentsRef, activeComponentsCount, navOffset))
        }
    }, [componentsRef, activeComponentsCount, navOffset])



    // return :
    //- the refs to provide to the components div
    //- the active component to be displayed in the navbar
    //- the on selection component changed callback raised from the navbar
    return [componentsRef, activeComponentId, onSelectedComponentChanged]
}

export default useActiveComponent
