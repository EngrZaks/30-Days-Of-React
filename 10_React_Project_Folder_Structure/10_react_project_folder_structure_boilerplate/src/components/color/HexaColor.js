import React from 'react'
import { hexaColor } from '../../utils/hexadecimal-color-generator'
const HexaColor = (props) => {
  const color = hexaColor()
  return (
    <div style={{ textAlign: 'center', border: '2px solid', height: 50, background: color }}>
      {color}
    </div>
  )
}

HexaColor.propTypes = {}

export default HexaColor
