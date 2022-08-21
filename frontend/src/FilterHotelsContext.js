import React,{useState,createContext} from 'react';
export const FilterHotelsContext = createContext();
export const FilterHotelsProvider = ({ children }) => {
    let filterNumofPeople;
    
    return(
        <FilterHotelsContext.Provider value={filterNumofPeople}>
                {children}
                
        </FilterHotelsContext.Provider>
        )

}