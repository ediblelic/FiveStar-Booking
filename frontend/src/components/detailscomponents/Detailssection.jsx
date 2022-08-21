import React from 'react'
import { useState,useEffect,useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import {Link} from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
import SimpleImageSlider from "react-simple-image-slider";
import RegisterUserInfoContext from '../../RegisterUserInfoContext'
import AuthContext from '../../AuthContext'
import './detailssection.css'
import format from 'date-fns/format';
import BookHotelContext from '../../BookHotelContext'
import Calendar from 'react-calendar'
import { parseISO } from 'date-fns'
function Detailssection(props) {
    const {t,i18n} = props 
    let {regInfo} = useContext(RegisterUserInfoContext)
    const [detailHotel,setDetailHotel] = useState([])
    const params = useParams()
    const navigate = useNavigate() 
    const [loading,setLoading] = useState(true)
    let {user} = useContext(AuthContext)
    let { checkin } = useContext(BookHotelContext)
    let {  setCheckin } = useContext(BookHotelContext)
    let { checkout } = useContext(BookHotelContext)
    let {  setCheckout } = useContext(BookHotelContext)
    const { bookHotelDate } = useContext(BookHotelContext)
    const [openCalendar,setOpenCalendar] = useState(false)
    const [opensdCalendar,setOpensdCalendar] = useState(false)
    let { oneDate } = useContext(BookHotelContext)   
    let calculateTimeDifference = checkout.getTime() - checkin.getTime() 
    let calculateDaysDifference = calculateTimeDifference /  (1000 * 3600 * 24)

    
    const getSingleHotel = async (name) =>{
        const api = await fetch(`/api/hotels/${params.name}`)
        const data = await api.json()
        setDetailHotel(data)
        setLoading(false)
    }
    useEffect(() => {
        getSingleHotel()
       
    }, [params.name])

    const images = [
        {url:detailHotel.frimg},
        {url:detailHotel.sdimg},
        {url:detailHotel.thimg},
        {url:detailHotel.ftimg},
    
    ]
    
    let yourPrice = detailHotel.price * calculateDaysDifference + detailHotel.price 
    //LOGIC TO DISABLED BOOKING DAYS
    let { singleDisabledDay } = useContext(BookHotelContext)
    let checkinDisabledDay = singleDisabledDay.checkin
    let frDisabledDay = checkinDisabledDay.substring(checkinDisabledDay.length - 2)
    let frDisabledMounthList = checkinDisabledDay.split('-')
    let frDisabledMounth = parseInt(frDisabledMounthList[1])
    let checkoutDisabledDay = singleDisabledDay.checkout
    let sdDisabledDay = checkoutDisabledDay.substring(checkinDisabledDay.length - 2)
    let sdDisabledMounthList = checkoutDisabledDay.split('-')
    let sdDisabledMounth = parseInt(sdDisabledMounthList[1])
        
   

  return (
    <>
    <div className='container'>
        <div className="hotels">
            <div className="hotelsearch">
                <h2 className='smalltitle'>{detailHotel.title}</h2>
            </div>
            <div className="hotelnav">
                <Link to='/' className='tohome'>
                <h2>{t('home.1')}</h2>
                </Link>
                <h2>/</h2>
                <Link to={'../hotels'} className='tohome'>
                <h2>{t('hotelsearch.1')}</h2>
                </Link>
        
            </div>
        </div>
    </div>
    <div className="hoteldetilssecion">
        <div className="container">
            <div className="detailsection">
                <div className="hotelphotos">
                {loading && <PulseLoader className='spiner' />}
                {!loading && <SimpleImageSlider 
                
                     width={956}
                     height={590}
                     images={images}
                     showBullets={true} 
                     showNavs={true}
                     autoPlay={true}
                     autoPlayDelay={3.0}
                     />}
                   
                </div>
                <div className='reservationhotel'>
                    <div className="reserv">
                    <h2>{t('reservation.1')}</h2>
                    <hr color='grey' />
                    </div>
                    <div className="reservationfrom">
                        <form className="reservationfrom"  >
                            {user ? null : <p>Email:</p>}
                            {user ? null : <input type="text" className='loggedin' onClick={() => navigate('../login')} placeholder={t('needtobe.1')} />} 
                            <div className="alllabels">
                                <p>Check in:</p>
                                {openCalendar && <Calendar className='reservcalendar' onChange={setCheckin}  minDate={new Date()} maxDate={checkout} />}
                                <input className='checkininput' type="date" name='vreme' onClick={() => setOpenCalendar(!openCalendar)} onChange={setCheckin} value={format(checkin, 'yyyy-MM-dd')} />
                            </div>
                            <div className="alllabels">
                                <p>Check out:</p>
                                {opensdCalendar   && <Calendar value={oneDate ? [parseISO(oneDate.checkin) , parseISO(oneDate.checkout) ] : checkout} tileDisabled={({activeStartDate, date, view }) => date.getDate() >= parseInt(frDisabledDay) && date.getDate() <= parseInt(sdDisabledDay) && date.getMonth()  === sdDisabledMounth - 1 } className="reservcalendarsd" onChange={setCheckout} minDate={checkin} />}
                                <input type="date" value={format(checkout, 'yyyy-MM-dd')} onClick={() => setOpensdCalendar(!opensdCalendar)} />
                            </div>
                            <p className='inital__price'>{t('inital.1')}:</p>
                            <p className='pricehotels'>{detailHotel.price}{t('dollar.1')}</p> 
                            {user ? <p className='inital__pricesd'>{t('yourprice.1')}:</p> : null}
                            {user ? <p className='pricehotelssd'>{checkin === checkout || checkin > checkout || yourPrice === 0 ? detailHotel.price :  parseInt(yourPrice)} {t('dollar.1')}</p> : null }
                        
                            <button disabled={!user || checkin >  checkout} className='btn' onClick={bookHotelDate}> {t('booknow.1')} </button>
                        </form>

                    </div>
                </div>
             
            </div>
        </div>
    </div>
    </>
  )
}

export default Detailssection