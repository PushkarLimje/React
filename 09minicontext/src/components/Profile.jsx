import React ,{ useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user , password} = useContext(UserContext)

    if (!user) {
        return <div> Please login  </div>
    }
    if (!password) {
        return <div> Please login  </div>
    }

    return (
        <div>Welcome {user.username} , pass: {user.password}</div>
    )
}

export default Profile
