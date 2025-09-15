import React, { useCallback, useEffect } from 'react'
import ChildCompWOUCB from './ChildCompWOUCB'
//without callback
export const ParentCompWOUCB = ({ title, releaseDate, view }) => {
    useEffect(() => {
        console.log('Parent rendered');
    })

    const generateCB = useCallback(() => `view: ${view}`, [view])

    return (
        <div>
            <ChildCompWOUCB title={title} releaseDate={releaseDate} generateCB={generateCB} />
        </div>
    )
}
