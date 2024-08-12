import { useEffect, useState } from 'react'


 function App() {
  const [count, setCount] = useState(0)
  const[currentValue,setCurrentValue]=useState(1)

  return (
    <div>
      <input type="text" onChange={(e)=>setCurrentValue(parseInt(e.target.value))} />
      <h4>Sum is {currentValue*(currentValue+1)/2.0}</h4>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App;
