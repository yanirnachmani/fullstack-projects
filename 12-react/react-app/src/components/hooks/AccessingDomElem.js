import React, { useEffect, useRef, useState } from 'react'

export const AccessingDomElem = () => {
    const [name, setName] = useState('')
    const inputRef = useRef()
    useEffect(() => {
        console.log(inputRef)
        inputRef.current?.focus()
    }, [])
    return (
        <div>
            <input
                ref={inputRef}
                onChange={event => setName(event.target.value)}
            />
            {name}
        </div>
    )
}
