import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user,setUser} = useContext(UserContext);
  console.log("ProfileData",user)
const logout = (e:any) => {
  e.preventDefault();
    setUser({
      name:user.name,
      email:user.email,
      password:user.password,
      isUser:true,
      loggedId:false
  })};
  return (
    <div>
      <div className='displayLogout'>
          <button className="btn btn-primary"onClick={(e)=>logout(e)}>Log Out</button>
      </div>
      <div className='p-4'>
        <h1>Profile {user.name}</h1>
      </div>
    </div>
  )
}

export default Profile
