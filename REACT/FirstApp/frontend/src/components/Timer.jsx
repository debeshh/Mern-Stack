import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [seconds,setSeconds] = useState(0);

    useEffect(()=>{
        const IntervalId = setInterval(()=>{
            setSeconds(seconds => seconds + 1)
        },1000);

        return()=>{
            clearInterval(IntervalId)
        };

    },[])
  return (
    <div>
        <h1>Seconds: {seconds}</h1>
      
    </div>
  )
}

export default Timer
