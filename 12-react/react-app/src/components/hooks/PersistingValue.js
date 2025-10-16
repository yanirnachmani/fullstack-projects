import React, { useState, useRef, useEffect } from 'react'

export const PersistingValue = () => {
    const [name, setName] = useState('')
    const prevName = useRef('')
    useEffect(() => {
        console.log(prevName)
        console.log(name)
        prevName.current = name
    }, [name])
    return (
        <div>
            <input type='text' onChange={(e) => setName(e.target.value)} />
            <p>current: {name}</p>
            <p>prev: {prevName.current}</p>
        </div>
    )
}
