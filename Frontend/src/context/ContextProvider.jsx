import { createContext, useContext, useState } from "react";
const SateContext = createContext({
    token : null,
    user : null,
    setUser: ()=> {},
    setToken : ()=> {}
});
// Create provider
export const ContextProvider = ({children}) =>{
    //initilize useState
    const [user,setUser] = useState({
        name:"Rakib"
    });
    // const [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [token,_setToken] = useState(1234);
    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    return (
        <SateContext.Provider value={{
            token,
            user,
            setUser,
            setToken
        }}>
            {children}
        </SateContext.Provider>
    );

}
export const useSateContext = () =>  useContext(SateContext);
