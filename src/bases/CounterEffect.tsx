import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null );

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
    }

    useEffect(() => {
        if (counter < MAXIMUN_COUNT) return;
        console.log('No se puede porque es mayor a ', MAXIMUN_COUNT);

        const tl = gsap.timeline();
        tl.to(counterElement.current,{ y: -10, duration: 0.5, ease: 'ease.out' })
          .to(counterElement.current,{ y: 0, duration: 0.5, ease: 'bounce.out' })

    }, [counter])

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={counterElement}>{ counter }</h2>  

            <button onClick={handleClick}>+1</button>
        </>
    )
}
