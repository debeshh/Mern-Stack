import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
        
      Hello,  {props.name.substring(0,6,1)}
        {props.children}
    </div>
  )
}

export default Card
