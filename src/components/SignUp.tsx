import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import { Link  } from 'react-router-dom'

function SignUp() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {user,setUser} = useContext(UserContext);
    const handleSave = (e:any) =>{
      e.preventDefault();
      if(password == confirmPassword){
        setUser({
          name:name,
          email:username,
          password:password,
          isUser:true,
          loggedId:false
        })
      }else
      console.log("Passwor Should be match")
    }
    // console.log("Username & Password",username,password)
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <label>name</label>
          <input
          type="text"
          onChange={(e) => {
            setName(e.target.value)
          }}
          >
          </input>
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
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          >
          </input>
          <label>Confirm Password</label>
          <input
          type="password"
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
          >
          </input>
          <button onClick={(e)=>handleSave(e)}>Sign Up</button>
        </form>
      </div>
    )
}

export default SignUp
