import React, {useEffect, useLayoutEffect, useRef, useState} from "react";


export const useScroll = () => {
    const scrollRef = useRef<React.LegacyRef<HTMLDivElement> | undefined>();
    const [makeScroll, setMakeScroll] = useState(false)
    const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down')
    const makeScrollHandler = (direction = 'down' as 'down' | 'up') => {
        setScrollDirection(direction)
        setMakeScroll(prev => !prev)
    }

    useLayoutEffect(() => {
        // @ts-ignore
        if (scrollDirection === 'down') scrollRef.current?.scrollIntoView(false)
        // @ts-ignore
        else scrollRef.current?.scrollIntoView(true)
    }, [makeScroll, scrollDirection]);
    return {scrollRef, makeScrollHandler}
}

export const useShowScrollBtnUP = () => {
    const [showBtnUp, setShowBtnUp] = useState<boolean>(false)

    useEffect(() => {
        const onScroll = () => {
            setShowBtnUp(document.documentElement.scrollTop >= 30);
        };
        onScroll();
        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll);
    });
    return showBtnUp
}
