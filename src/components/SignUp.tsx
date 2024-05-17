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
        <h1 className='m-4'>Sign Up</h1>
        <form>
          <label>Name</label>
          <div className='p-2'>
          <input
          type="text"
          placeholder='Name'
          onChange={(e) => {
            setName(e.target.value)
          }}
          >
          </input>
          </div>
          <label>Email Id</label>
          <div className='p-2'>
          <input
          type="text"
          placeholder='Email Id'
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          >
          </input>
          </div>
          <label>Password</label>
          <div className='p-2'>
          <input
          type="password"
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          >
          </input>
          </div>
          <label>Confirm Password</label>
          <div className='p-2'>
          <input
          type="password"
          placeholder='Confirm Password'
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
          >
          </input>
          </div>
          <button className="btn btn-primary m-4" onClick={(e)=>handleSave(e)}>Sign Up</button>
        </form>
      </div>
    )
}

export default SignUp
