import { createContext, useState } from "react";
const SateContext = createContext({
    token : null,
    user : null,
    setUser: ()=> {},
    setToken : ()=> {}
});
// Create provider
export const ContextProvider = ({children}) =>{
    //initilize useState
    const [user,setUser] = useState({});
    const [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    <SateContext.Provider value={{
        user,
        token,
        setUser,
        setToken
    }}>
        {children}
    </SateContext.Provider>
}
