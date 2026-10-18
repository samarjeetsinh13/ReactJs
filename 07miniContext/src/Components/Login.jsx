import React, {useState, useContext} from "react";
import UserContext from '../context/UserContext';

export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    //here setUser set the user values in UserContextProvider.jsx using the useContext state

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return(
        <>
            <div className="flex items-center justify-center gap-3 flex-col rounded-2xl bg-amber-300 backdrop-blur-lg h-65 w-100 mx-50 my-50">
                <h2 my-2 >Login</h2>
                <input type="text" 
                        className="rounded-2xl bg-white/80 p-2 backdrop-blur-lg text-black outline-none"
                        value={username}
                        placeholder="username"
                        onChange = {(e) => setUsername(e.target.value)} />
                <input type="text" 
                        className="rounded-2xl bg-white/80 p-2 backdrop-blur-lg text-black outline-none"
                        value={password}
                        placeholder="password" 
                        onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleSubmit}
                        className="rounded-2xl bg-white/20 p-2 backdrop-blur-lg text-black">Submit</button>
            </div>
        </>
    )
}
