import { useEffect, useState } from "react"
import { TodoProvider } from "./utils/context/todoContext";
import { TodoForm } from "./Components/TodoForm";
import { TodoItems } from "./Components/TodoItems";










export default function App(){


  let [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(current => [...current, {id:Date.now(), ...todo}]);
  }

  const updateTodo = (id, todo) => {
    setTodos(prevTodo => prevTodo.map((prev) => prev.id === id ? todo : prev));
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(p => p.id !== id));
  }

  const completeTodo = (id) => {
    setTodos(current => current.map(c => c.id === id ? {...c, completed: !c.completed }: c))
  }


  useEffect(() => {
    let todoDat = JSON.parse(localStorage.getItem("todos"));

    if(todoDat && todoDat.length> 0){
      setTodos(todoDat);
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return(
  <TodoProvider value={{...todos, addTodo, deleteTodo, updateTodo, completeTodo}} >
    <div className="bg-red-300 min-h-screen w-full flex px-10   justify-center">
  <div className="bg-red-400  max-h-130 mb-2  h-fit p-4 pb-15 mt-20 rounded shadow-md shadow-black/10 flex flex-col items-center max-w-150 w-[100%]">
    <h1 className="text-3xl text-white font-bold">Manage your daily tasks</h1>
    <TodoForm />
     <div className=" max-w-full w-[100%]  h-fit">
     {todos.map(todo => (
      <div key={todo.id}>
        <TodoItems tasks={todo} />
      </div>

     ))}
    </div>
  </div>

  </div>
  </TodoProvider>

  )
}