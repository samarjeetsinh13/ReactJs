import { useContext, useState } from "react";
import { useToDo } from "../context";

function ToDoForm() {

    const [todo, setTodo] = useState()

    const {addToDo} = useToDo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return 

        addToDo({ todo, completed:false })
        setTodo(todo)
    }
 
    return (
        <form  className="flex" onSubmit={add}>
            <input
                value={todo}
                onChange={(e)=>{setTodo(e.currentTarget.value)}}
                type="text"
                placeholder="Write Todo..."
                className="w-full rounded-l-lg px-3 outline-none duration-150 bg-black/10 text-white py-1.5"
            />
            <button type="submit" 
                    className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default ToDoForm;