import { useState, useEffect } from 'react'
import { DisplayCoordinates } from './DisplayCoordinates'

export const UseEffectTut = () => {
    const [count, setCount] = useState(0)//[state, setState]
    const [person, setPerson] = useState({ name: '', age: '' })
    const [display, setDisplay] = useState(true)

    useEffect(() => {
        console.log('UseEffectTut mounted or state changed!');

        // const interval = setInterval(() => {
        //     console.log('interval keep running');
        //     setCount((prevCount) => prevCount + 1)
        // }, 1000)
        // setPerson({ ...person, name: 'Atar' })
        return () => {
            console.log('UseEffectTut unmounted ');
            // clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        console.log('USE EFFECT FOR PERSON NAME STATE');
        document.title = person.name
    }, [person.name])

    useEffect(() => {
        console.log('USE EFFECT FOR PERSON AGE STATE');
        document.title = person.age
    }, [person.age])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increase
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
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            <div>{display && <DisplayCoordinates />}</div>
        </div>
    )
}
