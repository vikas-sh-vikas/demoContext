import React, { useState, ReactNode } from 'react';
import UserContext, { User } from './UserContext'
// interface UserContextProviderProps {
//     children: ReactNode;
// }

type userProvideProps = {
    children: ReactNode
}
const UserContextProvider= ({children}:userProvideProps)=>{
    const [user, setUser] = useState<User>(
        {
            name:'',
            password:'',
            isUser:false,
            loggedId:false
        }
    );
    return (
        <UserContext.Provider
        value={{user,setUser}}>
            {children}  
        </UserContext.Provider>
    )

}

export default UserContextProvider