
import SignUp from './SignUp'
import SignIn from './SignIn'
import Profile from './Profile'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Home() {
  const {user} = useContext(UserContext)
  console.log("UserData",user)
  return (
    <div>
        <h1>Home</h1>
        {user.isUser ? <SignIn />
:        <SignUp />}
        {user.loggedId ? <Profile />: null}
    </div>
  )
}

export default Home
