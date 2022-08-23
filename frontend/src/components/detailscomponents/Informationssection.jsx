import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import './informationssection.css'
function Informationssection( props) {
    const {t,i18n} = props 
    const [detailHotel,setDetailHotel] = useState([])
    const params = useParams()
    const [loading,setLoading] = useState(true)
    const [roomactive,setRoomActive] = useState(true)
    const [locationactive,setLocationActive] = useState(false)
    const [reviewsactive,setReviewsActive] = useState(false)
    
    const getSingleHotel = async (name) =>{
        const api = await fetch(`/api/hotels/${params.name}`)
        const data = await api.json()
        setDetailHotel(data)
        setLoading(false)
    }
    useEffect(() => {
        getSingleHotel()
    }, [params.name])
    const locationopen = () => {
        setRoomActive(false)
        setReviewsActive(false)
        setLocationActive(true)
    }
    const roomopen = () => {
        setRoomActive(true)
        setReviewsActive(false)
        setLocationActive(false)
    }
    const reviewsopen = () => {
        setRoomActive(false)
        setReviewsActive(true)
        setLocationActive(false)
    }
    let amenities = detailHotel.amenities
    let listamen
    if(amenities){
        listamen = amenities.split('\n')
        listamen = amenities.split(' ')
        
    }
   
    
  return (
    <div className='Informationssection'>
        <div className="container">
            <div className="maindetails">
                <div className="roomdetailsnav">
                    <h3 onClick={roomopen} className={roomactive ? 'roomactive' : 'roomdeactive'}>{t('roomdetails.1')} </h3>
                    <hr className="devis" />
                    <h3 onClick={locationopen}  className={locationactive ? 'roomactive' : 'roomdeactive'}>{t('location.1')}</h3>
                    <hr className="devissd" />
                    <h3  onClick={reviewsopen}className={reviewsactive ? 'roomactive' : 'roomdeactive'}>{t('reviews.1')} </h3>
                   
                </div>
                {roomactive &&
                <div className="information">
                    <h3 className='informationtitle'>INFORMATION</h3>
                    <p className='descriptionhotel'>{t('dummylorem.1')}</p>
                    <hr className="devi" />
                    <h3 className='informationtitle' >{t('AMENITIES.1')}</h3>
                    <div className="listamenities">
                        <ul>
                            {listamen ? listamen.map((each,index) => {
                                return (
                                    <li key={index} className="elements">- {each}</li>
                                    )
                                }) : ''}
                        </ul>
                    </div>
                </div>
                    }
                    {locationactive &&
                        <div className='informations'>
                               <h3 className='informationtitle'>LOCATION</h3>
                               <div className="listamenities">
                               <p className='googlemap'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.316492196852!2d15.871085815283307!3d44.81511658453899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761406e910a3f97%3A0xcd0fb20d32b76d96!2sHoliday%20in%20Biha%C4%87%20-%20Motel!5e0!3m2!1sbs!2sba!4v1661100961495!5m2!1sbs!2sba" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                                </div>
                        </div>
                    } 
            </div>
        </div>
    </div>
  )
}

export default Informationssection