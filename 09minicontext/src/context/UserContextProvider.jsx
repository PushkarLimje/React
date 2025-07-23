import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({children}) {
    const [user , setUser ]=  useState(null);
    const [password, setPasswordInfo] = useState(null);

    return (
        <UserContext.Provider value={{user,setUser, password , setPasswordInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
