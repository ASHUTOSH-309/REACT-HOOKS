import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Breakfast",
      description: "Angoor khauga"
    },
    {
      title: "Lunch",
      description: "Amity ka achcha mess"
    },
    {
      title: "Dinner",
      description: "Amrood khauga"
    },
    {
      title: "Sleep",
      description: "React Padhuga"
    }
  ])
  const [currentButton, setCurrentButton] = useState(1);

  return (
    <>
      <button onClick={() => setCurrentButton(1)}>1</button>
      <button onClick={() => setCurrentButton(2)}>2</button>
      <button onClick={() => setCurrentButton(3)}>3</button>
      <button onClick={() => setCurrentButton(4)}>4</button>
      <Todo title={todos[currentButton - 1].title} description={todos[currentButton - 1].description} />
      <FetchTodo id={currentButton} />
    </>
  )
}



function FetchTodo({ id }) {

  const [currentTodo, setCurrentTodo] = useState({})

    useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id).
        then((response) => {
          setCurrentTodo(response.data.todo)
        })
    }, [id])

  return <div>
    <Todo title={currentTodo?.title} description={currentTodo?.description} />
  </div>
}


function Todo({ title, description }) {

  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
