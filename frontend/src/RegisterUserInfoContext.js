import { useState,createContext } from "react";
const RegisterUserInfoContext = createContext();

export default RegisterUserInfoContext;
export const RegisterUserInfoProvider = ({ children }) => {
    let validForm = false
    let userValid = false
    let passwordValid = false
    let fullNameValid = false
   
    let registerUserData = {
        registrationFields:{      
                        username:'',
                        first_name:'',
                        email:'',
                        password:''
                           },
        emailRegex: /\S+@\S+\.\S+/,
        validForm:validForm,
        userValid:userValid,
        passwordValid:passwordValid,
        fullNameValid:fullNameValid,
        

    }
    const handleForm = (e) => {
        
        const {name,value} = e.target
        setRegInfo({...regInfo,[name]:value})
       

    }
    
    const [regInfo,setRegInfo] = useState(registerUserData.registrationFields)
    //Add to registerUserData
    registerUserData.handleForm = handleForm
    registerUserData.regInfo = regInfo
    registerUserData.setRegInfo = setRegInfo
    
    if(regInfo.username.length > 25 || regInfo.username === "" || regInfo.username === regInfo.password){
        userValid = false
        registerUserData['userValid'] = false
    }else{
        userValid = true
        registerUserData['userValid'] = true
    }
    if(regInfo.first_name.length > 25 || regInfo.first_name === "" || regInfo.first_name === regInfo.password){
        registerUserData['fullNameValid'] = false
    }else if (regInfo.first_name.indexOf(' ') > 0){
        registerUserData['fullNameValid'] = true
        fullNameValid = true
    }
    if(regInfo.password.length < 8 || regInfo.password === "" || regInfo.password === regInfo.first_name){
        registerUserData['passwordValid'] = false
    }else {
        registerUserData['passwordValid'] = true
        passwordValid = true
    }
    if (fullNameValid && userValid && passwordValid){
        registerUserData['validForm'] = true
    }
    
    
    return(
        <RegisterUserInfoContext.Provider value={registerUserData}>
                { children }
        </RegisterUserInfoContext.Provider>
    )
} 