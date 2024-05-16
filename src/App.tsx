import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import { useContext, useEffect, useState } from 'react'
import UserContext from './context/UserContext'
import Home from './components/Home'

function App() {
  const {user} = useContext(UserContext);
  console.log("useDataApp",user)
  return (
    <UserContextProvider>
    {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter> */}
        <Home />
        {/* <SignIn />
        <SignUp />
        <Profile /> */}
    </UserContextProvider>
  )
}

export default App