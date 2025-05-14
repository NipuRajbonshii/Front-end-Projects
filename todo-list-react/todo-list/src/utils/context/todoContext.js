import { createContext, useContext } from "react";


export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "message",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    completeTodo: (id) => {}

})


export const useCase = () => {
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider;