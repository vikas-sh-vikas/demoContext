import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function SignIn() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {setUser} = useContext(UserContext) 
  const handleLog = (e:any) =>{
    e.preventDefault();
    setUser({
      name:username,
      password:password,
      isUser:true,
      loggedId:true
    })

    console.log("Reach")
    // return <Link to="/profile"></Link>;

  }
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>EmailId</label>
        <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        >
        </input>
        <label>Password</label>
        <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        >
        </input>
        <button onClick={(e)=>handleLog(e)}>Sign Up</button>

      </form>
    </div>
  )
}

export default SignIn
