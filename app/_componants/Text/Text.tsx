"use client"

import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

function SplitText({
    text = '',
    className = '',
    delay = 100,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    easing = 'easeOutCubic',
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    size = "70px",
}) {
    const letters: any = text.split('');
    const [inView, setInView] = useState(false);
    const ref: any = useRef("");
    const animatedCount = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs: any = useSprings(
        letters.length,
        letters.map((_: any, i: any) => ({
            from: animationFrom,
            to: inView
                ? async (next: (arg0: { opacity: number; transform: string; }) => any) => {
                    await next(animationTo);
                    animatedCount.current += 1;
                    // if (animatedCount.current === letters.length && onLetterAnimationComplete) {
                    //     onLetterAnimationComplete();
                    // }
                }
                : animationFrom,
            delay: i * delay,
            config: { easing },
        }))
    );

    return (
        <p
            ref={ref}
            className={`split-parent impor overflow-hidden inline ${className}`}
            style={{ textAlign: "center", fontSize: size }}
        >
            {springs.map((props: any, index: any) => (
                <animated.span
                    key={index}
                    style={props}
                    className={`inline-block transform transition-opacity will-change-transform`}
                >
                    {letters[index] === ' ' ? ' ' : letters[index]}
                </animated.span>
            ))}
        </p>
    );
};

export default SplitText;
