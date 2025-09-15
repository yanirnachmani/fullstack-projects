import React, { useEffect } from 'react'

//without callback
const ChildCompWOUCB = ({ title, releaseDate, generateCB }) => {
    useEffect(() => {
        console.log('Child rendered');

    })
    return (
        <div>
            {title}
            <br></br>
            {releaseDate}
            <br></br>
            {generateCB()}
        </div>
    )
}

export default React.memo(ChildCompWOUCB)