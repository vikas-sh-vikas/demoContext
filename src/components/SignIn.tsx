import  { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

function SignIn() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [usernamematch, setUsernameMatch] = useState("")
  const [passwordMatch, setPasswordMatch] = useState("")
  const {user,setUser} = useContext(UserContext) 
  console.log(username,usernamematch)
  console.log(password,passwordMatch)
  // console.log(user)
  useEffect(()=>{
    setPasswordMatch(user.password)
    setUsernameMatch(user.email)
    // setName(user.name)
  },[])
  const handleLog = (e:any) =>{
    e.preventDefault();
    if(password == passwordMatch && username == usernamematch){
      setUser({
        name:user.name,
        email:username,
        password:password,
        isUser:true,
        loggedId:true
      });
// return <Link to="/profile"></Link>

    }
    else{
      console.log("Username or Password is incorrect")
    }

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
        type="password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        >
        </input>
        <button onClick={(e)=>handleLog(e)}>Sign In</button>

      </form>
    </div>
  )
}

export default SignIn
