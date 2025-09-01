import React from 'react'

const MemoChild = ({ title, releaseDate }) => {
    console.log('MemoChild rendered')
    return (
        <div>
            <p>Movie title: {title}</p>
            <p>Movie releaseDate: {releaseDate}</p>
        </div>
    )
}

export default React.memo(MemoChild)