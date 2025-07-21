import React, { useState } from 'react'
import './App.css'
import Logout from './components/Logout';
import Login from './components/Login';
// import Card2 from './components/Card2'
// import Navbar from './components/Navbar'
// import UserCard from './components/UserCard'
// import Counter from './components/Counter'
// import Card from './components/Card'
// import Button from './components/Button'

const App = () => {
  // const [count,setCount] = useState(0);

  // function handleClick(){
  //   setCount(count+1)
  // }



  //State Lifting

  //Create State
  //Manage State
  //Change State
  //sabhi child mein state ko sync karunga

  // const [name,setName] = useState();


  //conditional rendering
  const [isLoggedIn,setIsLoggedIn] = useState(true);

  // if(isLoggedIn){
  //   return (
  //     <Logout/>
  //   )
  // }
  // else{
  //   return (
  //     <Login/>
  //   )
  // }


  return (
    <div>
      {isLoggedIn ? <Logout/> : <Login/>}
    </div>
  )

  

  return (
    <div>

    {/* <Card2 name={name} setName={setName}/>
    <p>I am inside Parent Component and value of name is {name}</p> */}

      {/* <Button incrementCount={handleClick} text="click me">
        <h1>{count}</h1>
        </Button> */}
      {/* <Navbar/>

      <p>Hello Everyone</p> */}
      {/* <div className="cards">
        <UserCard name="Debesh Behera" style={{"border-radius":"20px"}}/>
        <UserCard name="Kshirodini Behera" style={{"border-radius":"20px"}}/>
        <UserCard name="Tenisa Behera" style={{"border-radius":"20px"}}/>
      </div> */}
      {/* <Counter/>
      <Card 
        name="Debesh Behera">
          <h1>Hello Everyone</h1>
        <p>I am Learning Web Development</p>
        <p>And I will Complete the Whole Web Development Before 27 JULY.</p>
        </Card> */}
      
    </div>
  )
}

export default App
