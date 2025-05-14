import { useState } from "react";
import { useCase } from "../utils/context/todoContext";


export function TodoForm(){
    const [dat, setData] = useState("");
    const {addTodo} = useCase();

    return (
        <>
        <form className="flex  px-4 mt-7 mb-10 py-3 justify-between items-center max-w-full  w-[100%] rounded relative" onSubmit={(e) => {
            e.preventDefault();
            const task = {
                todo: dat,
                completed: false
            }
            addTodo(task);
            setData("");
        }}>
            <input type="text"
            placeholder="Write Tasks..."
            value={dat}
            onChange={(e) => setData(e.target.value)}
            className="bg-white/50 px-4 w-[100%] rounded absolute left-0 text-black/55 outline-none py-2"
            autoFocus={true}
            />
            <button className="bg-emerald-400 absolute right-0 px-2 rounded-tr rounded-br text-white font-bold  py-2" type="submit">Add</button>
        </form>
        </>
    )
}