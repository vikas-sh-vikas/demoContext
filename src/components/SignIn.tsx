import  { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

function SignIn() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [usernamematch, setUsernameMatch] = useState("")
  const [passwordMatch, setPasswordMatch] = useState("")
  const [error, setError] = useState(false)
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
      setError(true)
      console.log("Username or Password is incorrect")
      // console.error("Username or Password is incorrect");
    }

    console.log("Reach")
    // return <Link to="/profile"></Link>;

  }
  return (
    <div>
      <h1 className='m-4'>Sign In</h1>
      <form>
        <label>Email Id *</label>
        <div className='p-2'> 
        <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        >
        </input>
        </div>
        <label>Password *</label>
        <div className='p-2'>
        <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        >
        </input>
        </div>
        {error ? <p className='text-danger'>Username or Password is incorrect</p> : null}
        <button className='btn btn-primary m-4' onClick={(e)=>handleLog(e)}>Sign In</button>


      </form>
    </div>
  )
}

export default SignIn
