import React, { useState } from 'react'
import { ParentCompWOUCB } from './ParentCompWOUCB'

export const ParentChanger = () => {
    const [view, setView] = useState(0)
    return (
        <div>
            <button onClick={() => setView(view + 1)}>Like</button>
            <ParentCompWOUCB title={'title'} releaseDate={'releaseDate'} view={view} />
        </div>
    )
}
