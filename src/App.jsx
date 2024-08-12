import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  /* 
    useEffect(() => {
  
      axios.get("https://sum-server.100xdevs.com/todos").
        then(function (response) {
          setTodos(response.data.todos)
        })
    }, [])
   */


  return (
    <>
          <FetchTodo id={2} />
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
  }, [])

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
