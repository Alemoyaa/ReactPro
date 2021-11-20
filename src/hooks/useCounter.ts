import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 10 }) => {
    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<HTMLHeadingElement>(null);

    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCount));
    }

    useLayoutEffect(() => {
        // if (counter < maxCount) return;
        // console.log('No se puede porque es mayor a ', maxCount);
        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current,{ y: -10, duration: 0.5, ease: 'ease.out' })
          .to(elementToAnimate.current,{ y: 0, duration: 0.5, ease: 'bounce.out' }).pause();

    }, [counter])

    
    useEffect(() => {
        // if (counter < maxCount) return;

        tl.current.play(0);
    }, [counter])

    return {
        counter,
        elementToAnimate,
        handleClick
    }
}