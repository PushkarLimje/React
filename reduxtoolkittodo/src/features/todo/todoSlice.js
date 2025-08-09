import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1, text: "Hello World"}]
}
//state 

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {       // addding this to store 
            const todo = {
                id:nanoid(),            // creates new id 
                text : action.payload   //add value using payload 
            }
            state.todos.push(todo);     //pushing in the state 
        },
        removeTodo: (state, action ) => {  // to extract and send data from store 
           // state take todos context or data 
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            )        
        },
        upadateTodo: (state,action) =>{
            const {id,text} = action.payload
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text ;
            }
        }
    }
})

export const {addTodo , removeTodo, upadateTodo} = todoSlice.actions
// exporting function individually

export default  todoSlice.reducer ;
//to add this in store