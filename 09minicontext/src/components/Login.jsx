import React,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername ]=useState('')
    const [password, setPassword ]=useState('')

    const {setUser , setPasswordInfo} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
        setPasswordInfo(password)
    }

    return (
        <div>
            <h2>Login</h2>
            <input value={username} type="text" placeholder='username '  onChange={(e)=> setUsername(e.target.value)}/>
            <br />
            <input  value={password} type="text" placeholder='Password '  onChange={(e)=> setPassword(e.target.value)}/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>        
    )
}

export default Login
