import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue=()=>{
setCount((prevcount)=>prevcount+1)
setCount((prevcount)=>prevcount+1)

setCount((prevcount)=>prevcount+1)

setCount((prevcount)=>prevcount+1)

  }
  // now it will add 4 if there we have wrote setcount(count + 1) 4 times so onnly one time update bcozz every time it will update from start
  const removeValue=()=>{
    setCount(count-1)
      }


return(
  <>
  
  
  <button 
  onClick={addValue}>
    add {count}
  </button>
  <button 
  onClick={removeValue}>
    remove {count}
  </button>
  
  
  </>
)

  
}

export default App
