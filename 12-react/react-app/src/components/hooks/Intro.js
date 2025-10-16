import React, { useState } from 'react'

export const Intro = () => {
    const [count, setCount] = useState(0)//[state, setState]
    const [person, setPerson] = useState({ name: '', age: '' })
    const [colors, setColors] = useState([])
    const [color, setColor] = useState('')
    const increaseFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1)
        }
    }
    return (
        <div>
            <button onClick={increaseFive}>
                Increase Count
            </button>
            <div>{count}</div>
            <div>
                <label>Name</label>
                <input type='text' onChange={(event) => setPerson({ ...person, name: event.target.value })} />
                <div>{person.name}</div>
            </div>
            <div>
                <label>Age</label>
                <input type='number' onChange={(event) => setPerson({ ...person, age: event.target.value })} />
                <div>{person.age}</div>
            </div>
            <div>
                <label>Color</label>
                <input type='text' onChange={(event) => setColor(event.target.value)} />
                <div>{color}</div>
                <button onClick={() => setColors([...colors, color])}>Add Color</button>
                <ul>
                    {colors.map((color) =>
                        <li>{color}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
