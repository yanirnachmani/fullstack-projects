import React, { useEffect, useState } from 'react'

export const DisplayCoordinates = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const listener = (event) => {
        console.log('mouse move');
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(() => {
        console.log('use effect in action');
        document.addEventListener('mousemove', listener)

        return () => {
            console.log('unmount');
            document.removeEventListener('mousemove', listener)
        }
    }, [])
    return (
        <div>{x}, {y}</div>
    )
}
