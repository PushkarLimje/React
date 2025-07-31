import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './context/todoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] =useState(()=> {
    try {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to load todos from localStorage", e);
    return [];
  }})

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now() , ...todo}, ...prev])
  }
  // does not reset the todo

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo ))) // prevTodo.id means every array id and id means that comes from 
    // true = add todo , false = call the prev todo
    //it search of id in each object .

  }

  const deleteTodo = (id ) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  } // filter works on only true statment not false 

  const toggleComplete = (id) => {  // overwriting completed 
    setTodos(
      (prev) => 
        prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo)
    )
  }

  // useEffect(()=> {
  //  const todos = JSON.parse(localStorage.getItem("todos"))
  //   if (todos && todos.length > 0) {
  //     setTodos(todos)
  //   }
  // },[])       // getting item from local storage 

//   useEffect(() => {
//   const todosFromStorage = localStorage.getItem("todos");
//   if (todosFromStorage) {
//     try {
//       const parsedTodos = JSON.parse(todosFromStorage);
//       if (Array.isArray(parsedTodos)) {
//         setTodos(parsedTodos);
//       }
//     } catch (e) {
//       console.error("Failed to parse todos from localStorage:", e);
//     }
//   }
// }, []);
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("todos") || "[]");
      console.log("Loaded from localStorage:", stored); // <-- ADD THIS
      setTodos(stored);
    } catch (err) {
      console.error("Invalid JSON in localStorage:", err);
      setTodos([]);
    }
  }, []);



  useEffect(()=> {
    console.log("Saving Todos ",todos) //check
    localStorage.setItem("todos", JSON.stringify(todos))   
  },[todos])     // setting  item from local storage 




  return (
    <TodoProvider value={{todos, addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
               {/* Todo form goes here */}
               <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                { todos.map((todo)=>(
                  <div key={todo.id}
                    className='w-full'
                  >
                    <TodoItem todo ={todo}/>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
