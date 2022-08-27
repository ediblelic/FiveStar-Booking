import React from 'react'
import { useContext,useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { FilterHotelsContext } from '../../FilterHotelsContext'
import { PulseLoader } from 'react-spinners'
import { NumofpeopleContext } from '../../NumofpeopleContext'
function LowToHighSection(props) {
    const {t} = props 
    const [numofpeople] = useContext(NumofpeopleContext)
    let filterNumofPeople = useContext(FilterHotelsContext)
    const [loading,setLoading] = useState(true)
    const [hotels,setHotels] = useState([])
    let lowtohighfilter;
    const getDefaultHotels = async () => {
      const gethotels =  await fetch('/api/hotels');
      const data = await gethotels.json()
      setHotels(data)
      setLoading(false)
  }
  filterNumofPeople = hotels.filter(each => each.numofpeople >= parseInt(numofpeople))
  useEffect(() => {
    getDefaultHotels()
    
  },[])
  lowtohighfilter = filterNumofPeople.sort(function(a,b){
    return a.price - b.price;
  })
  
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
        <Link to={'../hotels'}>
         <p style={{color:'black'}}>{t('default.1')}</p>
        </Link>
        <Link to={''} style={{color:'orange'}}>
         <p>{t('low.1')}</p>
        </Link>
         <Link style={{color:'black'}} to={'../hotels/high-to-low'}>
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
          {lowtohighfilter.map(hotel => {
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
        </div>
      </div>
    </div>  
      </>
  )
}

export default LowToHighSection