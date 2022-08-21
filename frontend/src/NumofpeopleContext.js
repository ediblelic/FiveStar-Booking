import React,{useState,createContext} from 'react';
export const NumofpeopleContext = createContext()

export const NumofpeopleProvider = (props) => {
    const [numofpeople,setNumofpeople] = useState('');
    return(
        <NumofpeopleContext.Provider value={[numofpeople,setNumofpeople]}>
            {props.children}
            
        </NumofpeopleContext.Provider>
    )
}