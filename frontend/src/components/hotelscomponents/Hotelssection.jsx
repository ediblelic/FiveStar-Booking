import React, { useEffect } from 'react'
import { useContext } from 'react'
import { NumofpeopleContext } from '../../NumofpeopleContext'
import { FilterHotelsContext } from '../../FilterHotelsContext'

import {Link} from 'react-router-dom'

import './hotelssection.css'
import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
const Hotelssection = (props) => {
  const [numofpeople] = useContext(NumofpeopleContext)
  let filterNumofPeople = useContext(FilterHotelsContext)
  
  const [hotels,setHotels] = useState([])
  const [range,setRange] = useState(0)
  const [openCalendar,setOpenCalendar] = useState(false)
  const [opensdCalendar,setOpensdCalendar] = useState(false)
  const [loading,setLoading] = useState(true)
  if (openCalendar === true && opensdCalendar === true){
    setOpenCalendar(false)
    setOpensdCalendar(false)
  }
  const getDefaultHotels = async () => {
      const check = localStorage.getItem('hotels')
      if (check){
        setHotels(JSON.parse(check))
        setLoading(false)
      }
      else{
        const gethotels =  await fetch('/api/hotels');
      const data = await gethotels.json()
      setHotels(data)
      setLoading(false)
      localStorage.setItem('hotels',JSON.stringify(data))
      }

  }
  filterNumofPeople = hotels.filter(each => each.numofpeople >= parseInt(numofpeople))
 
  useEffect(() => {
    getDefaultHotels()
    
  },[])
  const {t} = props
  return (
    <>
      <div className='container'>
        <div className="hotels">
          <div className="hotelsearch">
            <h2 className='smalltitle'>{t('hotelsearch.1')}</h2>
          </div>
          <div className="hotelnav">
            <Link to='/' className='tohome'>
            <h2>{t('home.1')}</h2>
            </Link>
            <h2>/</h2>
            <h2>{t('hotelsearch.1')}</h2>
          </div>
        </div>
      </div>
    <div className="filters">
      <div className="container">
        <div className="filter">
        <Link to={''}>
         <p style={{color:'orange'}}>{t('default.1')}</p>
        </Link>
        <Link to={filterNumofPeople.length === 0 ? '' : 'low-to-high'} style={{color:'black'}}>
         <p>{t('low.1')}</p>
        </Link>
         <Link style={{color:'black'}} to={'high-to-low'}>
         <p>{t('high.1')}</p>
        </Link>
        </div>
      </div>
    </div>
    <div className="allhotels">
      <div className="container">
        <div className="items">
            {loading && <PulseLoader className='spiner' />}
            <div className="gridhotels">
            {filterNumofPeople.map(hotel => {
              return(
                <div className='cards' key={hotel.id}>
                    <img className='pictures' src={hotel.frimg}  alt="" />
                    <h3 className='text'>{hotel.title}</h3>
                    <p className='shortdeschotel'>{t('shortdesc.1')}</p>
                    <h3 className='price'>{t('starting.1')} {hotel.price}$</h3>
                     <Link to={'/hotels/'+ hotel.id} className='links'>
                     <p>{t('details.1')}</p>
                     </Link> 
                    <hr  width='30px' color='orange' className='hrline'/>
                </div>
                
                )
              })}
             
              
          </div>
           
          <div className="reservation">
            <h2 style={{textTransform:'uppercase'}}>{t('reservation.1')}</h2>
            <p>TO: {range}$</p>
            <input type="range" min='0' max="500" step="50" value={range} onChange={(e)=> {setRange(e.target.value)}} />
            <button className='submit' type='submit'>{t('filter.1')}</button>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hotelssection