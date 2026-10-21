import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

export default function AddTodo(){

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input));
        setInput('')
    }


    return(
        <>
            <form  className="flex" onSubmit={addTodoHandler}>
                <input
                    value={input}
                    onChange={(e)=>{setInput(e.currentTarget.value)}}
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full rounded-l-lg px-3 outline-none duration-150 bg-black/10 text-white py-1.5"
                />
                <button type="submit" 
                        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                    Add
                </button>
            </form>
        </>
    )
}