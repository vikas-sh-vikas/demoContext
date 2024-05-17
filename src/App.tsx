import './App.css'
import UserContextProvider from './context/UserContextProvider'
import { useContext } from 'react'
import UserContext from './context/UserContext'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const {user} = useContext(UserContext);
  console.log("useDataApp",user)
  return (
    <UserContextProvider>
        <Home />
    </UserContextProvider>
  )
}

export default App