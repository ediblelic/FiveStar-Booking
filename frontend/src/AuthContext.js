import { createContext,useState,useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";
const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({children})  => {
    const navigate = useNavigate()
    let [user,setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [authToken,setAuthToken] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    
    const loginUser = async(e) => {
        e.preventDefault()
            let api =  await fetch('/api/token',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
            })
            let data = await api.json()
            if (api.status === 200){
                setAuthToken(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('authTokens',JSON.stringify(data))
                navigate('../')
            }else{
                alert('Check username or password!')
            }
    }
    const logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('../')
    }

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser
    }
    
    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )

}