import { ChildProp } from "../types"
import React from 'react'
import { useInView, animated, useTrail } from '@react-spring/web'

export default function ChainAnimation ({children}: ChildProp) {
    const items = React.Children.toArray(children)

    const [ref, isInView] = useInView({
        rootMargin: items.length * 50 + "px"
    })

    const trail = useTrail(items.length, {
        config: { mass: 2, friction: 40, clamp: true },
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
            clamp: true,
    })

    return (
        <div>
        {trail.map(({ ...style }, index) => (
            <animated.div key={index} style={style} ref={ref}>
            <animated.div>{items[index]}</animated.div>
            </animated.div>
        ))}
        </div>
    )
}