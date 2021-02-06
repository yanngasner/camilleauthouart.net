import { useState, useRef, useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

function useActiveComponent() {

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
    const ref10 = useRef(null)
    const ref11 = useRef(null)
    const ref12 = useRef(null)
    const ref13 = useRef(null)
    const ref14 = useRef(null)
    const ref15 = useRef(null)
    const ref16 = useRef(null)
    const ref17 = useRef(null)
    const ref18 = useRef(null)
    const componentsRef = [ref0, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18]
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

    smoothscroll.polyfill();

    //autoscroll to the selected component div
    const onSelectedComponentChanged = id => {
        if (componentsRef[id].current) {
            let offsetTop = componentsRef[id].current.offsetTop;
            offsetTop = offsetTop - navOffset
            window.scrollTo({ top: offsetTop, behavior: "smooth" })
        }
    }

    useEffect( () => {
        setNavOffset(componentsRef[0].current ? componentsRef[0].current.offsetHeight : 0)
    }, [componentsRef])

    useEffect(() => {
        //on scroll, set the active component regarding the scroll position
        const handleScroll = (componentsRef, navOffset) => {
            for (var i = 1; i < componentsRef.length; i++) {
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
            setActiveComponentId(componentsRef.length)
        }

        window.addEventListener('scroll', () => handleScroll(componentsRef, navOffset))

        return () => {
            window.removeEventListener('scroll', () => handleScroll(componentsRef, navOffset))
        }
    }, [componentsRef, navOffset])



    // return :
    //- the refs to provide to the components div
    //- the active component to be displayed in the navbar
    //- the on selection component changed callback raised from the navbar
    return [componentsRef, activeComponentId, onSelectedComponentChanged]
}

export default useActiveComponent
