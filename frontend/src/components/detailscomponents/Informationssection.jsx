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
            </div>
        </div>
    </div>
  )
}

export default Informationssection