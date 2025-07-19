import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <Navbar/>

      <p>Hello Everyone</p>
      <div className="cards">
        <UserCard name="Debesh Behera" style={{"border-radius":"20px"}}/>
        <UserCard name="Kshirodini Behera" style={{"border-radius":"20px"}}/>
        <UserCard name="Tenisa Behera" style={{"border-radius":"20px"}}/>
      </div>
      <Counter/>
      
    </div>
  )
}

export default App
