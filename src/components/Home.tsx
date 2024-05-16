
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
        {!user.isUser && <SignUp />}
:        {user.isUser && !user.loggedId && <SignIn />}
        {user.loggedId ? <Profile />: null}
    </div>
  )
}

export default Home
