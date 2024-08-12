import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      description: "Description 1"

    },
    {
      id: 2,
      title: "Todo 2",
      description: "Description 2"

    },
    {
      id: 3,
      title: "Todo 3",
      description: "Description 3"

    },
  ])

  useEffect(() => {

    axios.get("https://sum-server.100xdevs.com/todos").
    then(function(response){
      setTodos(response.data.todos)
    })
  }, [])



  return (
    <>
      {
        todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)

      }
    </>
  )
}



function Todo({ title, description }) {

  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>


}

export default App
