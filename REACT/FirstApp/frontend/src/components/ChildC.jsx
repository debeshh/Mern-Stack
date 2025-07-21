import React, { useContext } from 'react'
import { useReducer } from 'react'
import { ThemeContext } from '../App'
// import { UserContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
    const {theme,setTheme} = useContext(ThemeContext);
    function handleClick(){
        if(theme === 'light')
            setTheme('dark');
        else
            setTheme('light')
    }
  return (
    <div>
        {theme}
        <button onClick={handleClick}>
            change theme
        </button>
        {/* {user.name} */
        }
    </div>
  )
}

export default ChildC
