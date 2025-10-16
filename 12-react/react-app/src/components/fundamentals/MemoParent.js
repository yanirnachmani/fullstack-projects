import React from 'react'
import MemoChild from './MemoChild'

export const MemoParent = ({ title, releaseDate, view }) => {
    console.log('MemoParent rendered');
    return (
        <div>
            <MemoChild title={title} releaseDate={releaseDate} obj={{}} />
            <p>views: {view}</p>
        </div>
    )
}
