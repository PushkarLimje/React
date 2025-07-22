import React from 'react'
import { useParams } from 'react-router-dom'

// use param is use yo fetch data from website link  where ( :userid/:age ) is given 
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
