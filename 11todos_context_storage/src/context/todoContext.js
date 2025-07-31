import { createContext, useContext  } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg ",
            completed: false
        }
    ],
        addTodo : (todo) => {},
        updateTodo: (id, todo) => {},
        deleteTodo: (id) => {} ,
        toggleComplete : (id) =>{}

}) //giving by default values 

export const TodoProvider = TodoContext.Provider 
//creating a provider

export const useTodo = () =>{ 
    return useContext(TodoContext)
}
//directly giving access to the global todo context 