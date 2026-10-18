import React, {useContext} from "react";
import UserContext from "../context/UserContext";

export default function Profile(){
    const {user} = useContext(UserContext);
    if (!user) return <div>Please Login </div>
    if (user.password == "") return <div>please Enter Password</div>

    return <div>Welcome {user.username}</div>
}