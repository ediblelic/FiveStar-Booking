import { createContext } from "react";
import { useNavigate } from "react-router";
const RegisterUserContext = createContext()
export default RegisterUserContext;
export const  RegisterUserProvider = ({ children }) => {
    const navigate = useNavigate()
    let cooki = document.cookie
    let seperate = cooki.split('=')
    const csrfToken = seperate[1]
    console.log(cooki)
    const regUser = async(e) => {
        e.preventDefault()
       
        const api = await fetch('/api/register',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                "X-CSRFToken": csrfToken,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"username":e.target.username.value,"email":e.target.email.value,"password":e.target.password.value,"first_name":e.target.first_name.value})
        })
        let data = api.json()
        if (api.status === 200){
            navigate('../login')
           
        }
        else{
        
            alert('User already exist')
        }
    }
    let contextInfo = {
        regUser:regUser
    }
    return(
        <RegisterUserContext.Provider value={contextInfo}>
                { children }
        </RegisterUserContext.Provider>
    ) 

}