import { useParams } from "react-router-dom"

export default function User(){
    const {userID} = useParams()
    return(
        <>
            <div className="bg-amber-600 p-4 text-2xl text-center text-white">User:{userID}</div>
        </>
    )
}