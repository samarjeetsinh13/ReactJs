import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){

    const data = useLoaderData()

    console.log(data)

    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/samarjeetsinh13")
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         setData(data)
    //     })
    // },[])
    return(
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
                <img src={data.avatar_url} alt="Git picture" width={300} />
                </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/samarjeetsinh13')
    return response.json()
}

// Using new aproach we can start fetching the data form spi when we first time hover on the link the data store in cache memory