import React from 'react'
import css from '../../css/prodStyle.module.css'

export const StylingModuleProductWithProb = ({ styles }) => {

    const filteredStyle = Object.keys(styles)
        .filter(style => styles[style])
        .map(key => css[key])

    console.log(Object.keys(styles));


    console.log(Object.keys(styles)
        .filter(style => styles[style]));


    console.log(Object.keys(styles)
        .filter(style => styles[style])
        .map(key => css[key]));



    return (
        <div className='card'>
            <div className={filteredStyle.join(' ')}>Computer</div>
            <div>Electronics</div>
        </div>
    )
}
