import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "./AuthContext";
const SendWelcomeEmailContext = createContext()
export default SendWelcomeEmailContext
export const  SendWelcomeEmailProvider = ({ children }) => {
    const [userEmail,setUserEmail] = useState([])
    const [dataMail,setDataMail] = useState([])
    let { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const getUserEmail = async() => {
            let api = await fetch(`api/email/${user ? user.user_id:29}`)
            let data = await api.json()
            setUserEmail(data)
        }
    useEffect(()=> {
        getUserEmail()
    },[])
    
    const sendBookingEmail = async() => {
      
        let api = await fetch(`http://localhost:8000/api/email/${userEmail.email}/username/${user.username}`)
        let data = await api.json
      
        if (api.status === 200){
            alert('We send you an Email')
            navigate('../')
            window.location.reload()
        }else{
            alert('ERROR')
            
        }
    }
    const sendBookingEmailDe = async() => {
      
        let api = await fetch(`http://localhost:8000/api/email/${userEmail.email}/username/${user.username}/de`)
        let data = await api.json
      
        if (api.status === 200){
            alert('Wir senden Ihnen eine E-Mail')
            navigate('../')
            window.location.reload()
        }else{
            alert('ERROR')
            
        }
    }
   
    
    let sendEmailData = {
        getUserEmail:getUserEmail,
        sendBookingEmail:sendBookingEmail,
        sendBookingEmailDe:sendBookingEmailDe

    }
    return (
        <SendWelcomeEmailContext.Provider value={sendEmailData}>
            { children }
        </SendWelcomeEmailContext.Provider>
    )
}
