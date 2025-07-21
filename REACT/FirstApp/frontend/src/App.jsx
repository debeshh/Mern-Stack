import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';
// import ChildA from './components/ChildA';
// import DataFetcher from './components/DataFetcher';
// import Timer from './components/Timer';
// import Logout from './components/Logout';
// import Login from './components/Login';
// import Card2 from './components/Card2'
// import Navbar from './components/Navbar'
// import UserCard from './components/UserCard'
// import Counter from './components/Counter'
// import Card from './components/Card'
// import Button from './components/Button'

//step 1 Create UseContext()
// const UserContext = createContext();
//step 2 -> wrap all the child inside a Provider

//step 3 -> pass value


//step 4 -> consumer ke andar jake consume karlo


const ThemeContext = createContext();



const App = () => {



  const [theme,setTheme] = useState('light');


  // const [user,setUser] = useState({name:"Debesh"});

  // const [count,setCount] = useState(0);
  // const [total,setTotal] = useState(1);
  //first -> sideEffect logic
  //second -> clean-up function
  //third -> comma separated dep list.  main thing whenever update it will run the first

  
  
  
  
  // variation:1
  // runs on every render


  // useEffect(()=>{
  //   alert("I will join on every render")
  // },)






  // variation:2
  // runs on only first render

  // useEffect(()=>{
  //   alert("I will return on only first render")
  // },[])






  // variation 3
  // i wll run every time when count is rendered.
  // useEffect(()=>{
  //   alert("i will render every time when count is updated")
  // },[count])






  // variation 4
  // multiplle dependencies
  // useEffect(()=>{
  //   alert("i will render whenever count and total is updated")
  // },[count ,total])








  // variation 5
  // use cleanup function.

  // useEffect(()=>{
  //   alert("Count is updated")
  //   return ()=>{
  //     alert("count is unmounted from UI")
  //   }
  // },[count])








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
  // const [isLoggedIn,setIsLoggedIn] = useState(true);

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


  // return (
  //   <div>
  //     {isLoggedIn ? <Logout/> : <Login/>}
  //   </div>
  // )
  // function handleClick(){
  //   alert("I M CLICKED")
  // }

  // function handleMouseOver(){
  //   alert("para ke upar mouse lekr aaye ho!")
  // }


  // function handleOnChange(e){
  //   // console.log("Input mein text chnage huii hai")
  //   console.log("Input mein text chnage huii hai: ", e.target.value)
  // }

  // function handleOnSubmit(e){
  //   // e.default.vale = "";
  //   e.preventDefault();
  //   alert("Form submit kar dun kya?");

  // }


  return (
    <div>



      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor: theme === 'light' ? "beige" : "black"}}>
          <ChildA/>
        </div>
        
      </ThemeContext.Provider>
{/* 
    <UserContext.Provider value={user}>
      <ChildA/>
    </UserContext.Provider> */}

     


      




      {/* <DataFetcher/> */}
       {/* <Timer/> */}
       {/* <button onClick={()=>{
        setCount(count+1)
       }}>Update count</button>
       <br />
       Count is: {count}
       <br />
       <button onClick={()=>{
        setTotal(total+1)
       }}>Update total</button>
       <br />
       Total is: {total} */}



      {/* <button onClick={()=>alert("buttonclicke dme")}>click me</button> */}

      {/* <form onSubmit={handleOnSubmit}>
        <input type="text" name="" id="" onChange={handleOnChange}/>
        <button type="submit" >submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{color:"red",border:"1px solid white"}}>
        I am a Para
      </p>

    <button onClick={handleClick}>
      click me
    </button> */}


    

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

export default App;
// export {UserContext};
export {ThemeContext};