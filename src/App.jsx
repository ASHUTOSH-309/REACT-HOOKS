import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

 const [currentButton,setCurrentButton]=useState(1);


  return (
    <>
          <button onClick={()=>setCurrentButton(1)}>1</button>
          <button onClick={()=>setCurrentButton(2)}>2</button>
          <button onClick={()=>setCurrentButton(3)}>3</button>
          <button onClick={()=>setCurrentButton(4)}>4</button>

          <FetchTodo id={currentButton} />
    </>
  )
}

function FetchTodo({ id }) {

  const [todos,setTodos]=useState({})

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).
      then(function (response) {
        setTodos(response.data.todo)
      })
  }, [id])

  return <div>

    <Todo key={todos.id} title={todos.title} description={todos.description} />

    
  </div>
}



function Todo({ title, description }) {

  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
