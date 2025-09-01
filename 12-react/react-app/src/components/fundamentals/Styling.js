import React from 'react'
import '../../css/styles.css'

export const Styling = ({ styles }) => {

    console.log(Object.keys(styles))
    const filteredStyle = Object.keys(styles)
        .filter(style => styles[style])
    return (
        <div className={filteredStyle.join(' ')}>Styling</div>
    )
}
