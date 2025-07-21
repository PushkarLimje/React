import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid, age } = useParams()
    
    return (<>
        <div className='bg-gray-700 text-white text-3xl rounded-xl py-20 px-28'>
        <div>User : {userid}</div>
        <div>Age : {age}</div>
        </div>
        </>
    )
}

export default User
