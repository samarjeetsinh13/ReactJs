import { useState } from "react";
import { useToDo } from "../context/index";

function ToDoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateToDo, removeToDo, toggleComplete} = useToDo()

    const editTodo = ()=>{
        updateToDo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = ()=>{
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex  rounded-lg px-3 py-1.5 gap-x-3  duration-300 shadow-lg  text-black ${
                todo.completed ? "bg-[#c6e9a7]/40" : ""
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent font-bold rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-white/10 hover:bg-white/20 shrink-0 disabled:opacity-50"
                onClick={(e) => {
                    e.preventDefault()
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-white/10 hover:bg-white/20 shrink-0"
                onClick={() => removeToDo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default ToDoItem;
