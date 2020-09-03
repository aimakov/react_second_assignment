import React, { Component } from 'react'

const inputField = (props) => {
    return(
    <input type="text" onChange={props.changed} value={props.message}/>
    )
}

export default inputField;