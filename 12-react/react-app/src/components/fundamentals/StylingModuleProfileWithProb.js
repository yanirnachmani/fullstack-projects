import React from 'react'
import css from '../../css/profileStyle.module.css'

export const StylingModuleProfileWithProb = () => {
    // console.log('prof', css);

    return (
        <div className='card'>
            <div className={css.title}>Dolex</div>
            <div>UX designer</div>
        </div>
    )
}
