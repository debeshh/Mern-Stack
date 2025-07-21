import React from 'react'

const Card2 = (props) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
      <input type='text' onChange={(e)=>{
        props.setName(e.target.value)
      }}/>
      <p>Name state Variable ki value inside card: {props.name}</p>
    </div>
  )
}

export default Card2
