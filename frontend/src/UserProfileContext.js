import React,{useState,createContext, useContext, useEffect} from 'react';
import AuthContext from './AuthContext';

export const UserProfileContext = createContext();
export const UserProfileProvider = ({ children }) => {
    let { user } = useContext(AuthContext)
    const [userData,setUserData] = useState([])
    const [extendedUserData,setExtendedUserData] = useState([])
    const getUserProfileData = async() => {
        let api = await fetch(`api/userprofile/${user.user_id}`)
        let data =  await api.json()
        setUserData(data)
    }
    const getExtendedUserData = async () => {
        let api = await fetch(`api/user/profile/${user.user_id}/infos`)
        let data = await api.json()
        setExtendedUserData(data)
    }
    useEffect(() => {
        getUserProfileData()
        getExtendedUserData()
    },[])
    let fullName = extendedUserData.first_name
    
   
    let userProfileData = {
        userData:userData,
        extendedUserData:extendedUserData,
        

    };

    
    return(
        <UserProfileContext.Provider value={userProfileData}>
                {children}
                
        </UserProfileContext.Provider>
        )

}