import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const counting =()=>{
    setCount((count) => count + 1)
  }

  return (
    <>
      <div className="card">
        <button onClick={counting}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
