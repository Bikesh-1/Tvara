import React from 'react'
import MagnetLines from '../ReactBitsComponents/MagnetLines';

function Magnet() {
  return (
    <div>
        <MagnetLines
  rows={9}
  columns={9}
  containerSize="60vmin"
  lineColor="tomato"
  lineWidth="0.8vmin"
  lineHeight="5vmin"
  baseAngle={0}
  style={{ margin: "2rem auto" }}
/>
    </div>
  )
}

export default Magnet 