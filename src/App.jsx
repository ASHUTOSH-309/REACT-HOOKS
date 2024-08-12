import { memo, useCallback, useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [currentValue, setCurrentValue] = useState(1)

  const logger=useCallback(function () {
    console.log("Inside Logger function")
  },[])

  return (
    <div>
      <ChildComponent myfunc={logger} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

const ChildComponent=memo( ({ myfunc })=> {
  return <div>
    <h1>Inside Child Component</h1>
    {myfunc()}
  </div>
})

export default App;
