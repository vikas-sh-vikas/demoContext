import { createContext, Dispatch,SetStateAction} from "react";
export type User = {
    name:string
    email:string
    password:string
    isUser:boolean
    loggedId:boolean
}

export interface UserContextInterface {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

const defaultState = {
    user: {
        name: '',
        email:'',
        password: '',
        isUser:false,
        loggedId:false
    },
    setUser: (user:User) => []
} as UserContextInterface

const UserContext = createContext(defaultState)

export default UserContext;