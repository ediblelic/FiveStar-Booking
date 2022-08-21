
import React from 'react'
import './footersection.css'
import paypal from '../../assets/footerassets/paypal.png'
import master from '../../assets/footerassets/master.png'
import visa from '../../assets/footerassets/visa.png'
import { useEffect,useState } from 'react'
function Footersection(props) {
  const {t,i18n} = props

  const [infos,setInfos] = useState([])
  useEffect( ()=> {
      getCompanyInfos()
     
    },[])

  const getCompanyInfos = async() =>{
      const info = await fetch('http://127.0.0.1:8000/api/infos')
      const data = await info.json()
      setInfos(data)}
  
   let id, email, addres, phoneNum;
      { infos.map(e => {
        return(
          {id,email,addres,phoneNum} = e
        )
    })}
  return (
    <div className="footer">
        <div className="container">
            <div className="columns">
                <div className="contactcol">
                 <h2>{t('contact.1')}</h2>
                 <p>{addres}</p>
                 <p>{email}</p>
                 <p>{phoneNum}</p>
                 <div className="paycards">
                    <img src={paypal} alt="" />
                    <img src={master} alt="" />
                    <img src={visa} alt="" />
                 </div>
                </div>
                <div className="vintage">
                    <h2 style={{textTransform:'uppercase'}}>{t('vintage.1')}</h2>
                    <p>{t('shortdesc.1')}</p>
            
                </div>
                <div className="newletter">
                  <h2 style={{textTransform:'uppercase'}}>{t('newsletter.1')}</h2>
                  <input className='emailsend' type="email" placeholder='@email' />
                  <button className='gobtn'>GO</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footersection