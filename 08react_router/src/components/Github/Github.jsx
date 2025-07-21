import React from 'react'
import { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
// to load the data 

function Github() {
    // const [data, setData] = useState([]); // ✅ You need this
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/PushkarLimje')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     });
    // },[])

    const data = useLoaderData(); // data loading
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github Followers :  {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full'/>
        </div>
    )
}

export default Github

export const gitubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/PushkarLimje')
    return response.json()
}
