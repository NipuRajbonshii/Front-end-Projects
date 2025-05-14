import { useState } from "react"
import { useCase } from "../utils/context/todoContext";




export function TodoItems({tasks}){

        const [editing, setEditing] = useState(false);
        const [msg, setMsg] = useState(tasks.todo);
        const {deleteTodo, updateTodo, completeTodo} = useCase();

        const changeComplete = () => {
            completeTodo(tasks.id)
        }

        const changeTodo = () => {
            updateTodo(tasks.id, {...tasks, todo: msg});
            setEditing(false);
        }
        return (
               <div className={`flex space-y-1  px-5 mt-7 mb-1 py-2 items-center max-w-full w-full rounded relative ${tasks.completed?"bg-[#b7d7e8]": "bg-white/50"}`}>
              <div className="flex mr-2  mt-1.5 max-w-4 w-[100%]">
                 <input type="checkbox" 
               className="cursor-pointer"
               checked={tasks.completed}
               onChange={changeComplete}
               />
              </div>
               <input
                type="text"
                className={`outline-none   max-w-30 md:max-w-70 w-[100%] text-[10px] sm:text-lg ${tasks.completed? 'line-through': ''}`}
                value={msg}
                readOnly={!editing}
                onChange={(e) => setMsg(e.target.value)}
                ></input>
               <div className="max-w-8 mt-1 sm:mt-1  w-[100%] absolute right-15 sm:right-20 ">
                 <button onClick={() => {
                   if(editing){
                    changeTodo();
                   }
                   else {
                    setEditing(true);
                   }
                }}
                disabled={tasks.completed}
                className="bg-white size-8 rounded"
                >{editing?"📄":"🖊️"}</button>
               </div>
              <div className="max-w-8  w-[100%] absolute right-3 sm:right-5 ">
                  <button onClick={(e) => deleteTodo(tasks.id)}  className="bg-white size-8 rounded">❌</button>
              </div>
               </div>
        )
}