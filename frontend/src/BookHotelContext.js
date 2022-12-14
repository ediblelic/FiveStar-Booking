import { format } from "date-fns";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';
import AuthContext from "./AuthContext";
import SendWelcomeEmailContext from "./SendWelcomeEmailContext";
const BookHotelContext = createContext();
export default BookHotelContext;
export const BookHotelProvider = ({children}) => {
    let [checkin, setCheckin] = useState(new Date());
    let [checkout, setCheckout] = useState(new Date());
    const [t,i18n] = useTranslation()
    
    let url = window.location.href
    const navigate = useNavigate()
    const { sendBookingEmail } = useContext(SendWelcomeEmailContext)
    const { sendBookingEmailDe } = useContext(SendWelcomeEmailContext)
    let { user } =  useContext(AuthContext)
    let params = url.substring(url.length - 1)
    let cooki = document.cookie
    let seperate = cooki.split('=')
    const csrfToken = seperate[1]
    const [bookedDates,setBookedDates] = useState([])
    
    const bookHotelDate = async(e) => {
        e.preventDefault()
        
        const api = await fetch('/api/reserv/',{
            method:'POST',
            headers: {
                "X-CSRFToken": csrfToken,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(
                {
                    "checkin":format(checkin, 'yyyy-MM-dd'),
                    "checkout":format(checkout, 'yyyy-MM-dd'),
                    "current_user": user.user_id ,
                    "current_hotel": parseInt(params)
                }
                )
        })
        
        
        if (api.status === 200){
            alert('You have successfully booked the date')
           
            
        }
        else {
            alert('Room booked already')
        }
        if (i18n.language === 'de'){
            sendBookingEmailDe()
        }else{
            sendBookingEmail()
        }
    }
    const request = async() => {
        const getApi = await fetch('/api/allres')
        let data =  await getApi.json()
        setBookedDates(data)
    }
    useEffect(() => {
        request()
    },[])
    let filteredDates;
    let oneDate;
    let numCardItems;
    let disabledDays;
    let singleDisabledDay;
    if(user && parseInt(params) ){
        filteredDates = bookedDates.filter(each => each.current_user ===   user.user_id   && each.current_hotel === parseInt(params))
        oneDate = filteredDates[filteredDates.length - 1]
    }
    if(user){
        numCardItems = bookedDates.filter(each => each.current_user ===   user.user_id)
    }
    if(user && parseInt(params))
    {
        disabledDays = bookedDates.filter(each => each.current_user !==  user.user_id && each.current_hotel === parseInt(params) )
     
        singleDisabledDay = disabledDays[disabledDays.length - 1]
    
        
       
    }
    if (!singleDisabledDay){
        singleDisabledDay = {
            checkin:'2050-01-01',
            checkout: '2060-01-01'
        }
    }
   
    let bookingData = {
        checkin:checkin,
        setCheckin:setCheckin,
        checkout:checkout,
        setCheckout:setCheckout,
        bookHotelDate:bookHotelDate,
        oneDate:oneDate,
        numCardItems:numCardItems,
        singleDisabledDay:singleDisabledDay
    }
 
  
    return (
        <BookHotelContext.Provider value={bookingData}>
              { children }
        </BookHotelContext.Provider>
        
        )
}
