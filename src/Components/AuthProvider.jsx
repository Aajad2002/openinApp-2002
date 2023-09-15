import React, { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [user,setUser]=useState({})
    const [check,setCheck]=useState(false)
    return <AuthContext.Provider value={{isAuth,setIsAuth,user,setUser,check,setCheck}} >
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider