import React from 'react'

// A button component
const Button = ({ text, onClick, style }) => (
  <button className='button' style={style} onClick={onClick}>
    {text}
  </button>
)

export default Button

