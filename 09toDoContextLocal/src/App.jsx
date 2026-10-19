import { useEffect, useState } from 'react'
import { ToDoProvider } from './context'
import ToDoForm from './component/ToDoForm'
import ToDoItem from './component/ToDoItem'

// .map()=>() here () mean auto return

function App() {

  const [todos, setTodos] = useState([])

  const addToDo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo},...prev])
  }

  const updateToDo = (id, todo) => {
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id?todo: prevTodo)))
  }

  const removeToDo = (id) => {
    setTodos((prev)=>prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))  
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    <ToDoProvider value={{todos, addToDo, updateToDo, removeToDo, toggleComplete}}>
      <div  className=" min-h-screen py-8" 
            style={{
                  backgroundImage:`url("https://i.pinimg.com/1200x/b5/d6/01/b5d60173028061dfb8c58a2cc8c0a2d4.jpg")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize:"cover",
                  backgroundPosition:"center"
                  }}>
      <div className='absolute inset-0 bg-black/20'></div>
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-white/2 backdrop-blur-md">
            <h1 className="text-2xl font-bold text-white text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <ToDoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {todos.map((todo) => (
                    <div key={todo.id}
                      className='w-full'
                    >
                      <ToDoItem todo={todo}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>

    </ToDoProvider>
  )
}

export default App
