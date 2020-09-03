import './charCards.css'
import React from 'react'

const charCards = (props) => {
    return(
        <p className='charCards' onClick={props.click} > {props.chars} </p>
    )
}

export default charCards;