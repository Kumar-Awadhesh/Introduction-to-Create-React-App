import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

//function app.
function App() {

  //set count state using useState functionality.
  let [count, setCount] = useState(0)

  //return the mount
  return (
    <>
      {/* {div to wrap all elements} */}
      <div className='container'>
        {/* {display the count state on every operation} */}
        <span className='counter'>Counter: {count}</span>
        {/* {button with the functionality to increase count} */}
        <button onClick={()=>{
          // increase count on every click
          setCount(count+1)
        }}>+</button>
        {/* {button with the functionality to decrease count} */}
        <button onClick={()=>{
          // check than count must be greater than zero before decreasement
          if(count > 0){
            // decrease count on every click only if condition is true
            setCount(count-1)
          }
        }}>-</button>
      </div>
    </>
  );
}

export default App;
