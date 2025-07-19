import React from 'react'
import web from '../assets/web.png'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={web} alt="" style={{height:"200px"}} />
      <p id='user-desc'>Description of {props.name}</p>

    </div>
  )
}

export default UserCard
