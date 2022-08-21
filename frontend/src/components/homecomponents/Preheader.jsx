import React, { useState,useEffect } from 'react'
import './preheader.css'
import  location from '../../assets/location.svg'
import message from '../../assets/message.svg'
import phone from '../../assets/phone.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import  at from '../../assets/at.svg'
import  unitedstates from '../../assets/unitedstates.png'
import  germany from '../../assets/germany.png'

function Preheader(props)
 {
  const [infos,setInfos] = useState([])
  const {language,setLanguage} = props

  useEffect( ()=> {
    getCompanyInfos()
   
  },[])

  const getCompanyInfos = async() =>{
    const check = localStorage.getItem('infos')
    if (check){
      setInfos(JSON.parse(check))
    }else{

      const info = await fetch('/api/infos')
      const data = await info.json()
      setInfos(data)
      localStorage.setItem('infos',JSON.stringify(data))  
    }
    
  }
  let id, email, addres, phoneNum;
  { infos.map(e => {
    return(
      {id,email,addres,phoneNum} = e
    )
})}
function handleClick (lang) {
  setLanguage.changeLanguage(lang)
} 

  
  return (
    <div className="preheader">
    <div className="container">
        <div className="infos">
          <img className='logoicons' src={location} alt="" />
          <p>{addres}</p>
            <p>|</p>
            <img className='othericons'src={message} alt="" />
            <p>{email}</p>
          
            <p>|</p>
            <img className='othericons' src={phone} alt="" />
            <p>{phoneNum}</p>
        </div>
        <div className="social">
          <a href="#">
            <img className='networks' src={twitter} alt="" />
            </a>
            <a href="#">
          <img className='facebook' src={facebook} alt="" />
            </a>
              <a href="#">
                <img className='networks'  src={instagram} alt="" />
              </a>
              
              <a href="#">
                <img className='at'  src={at} alt="" />
              </a>
                <img className='flags' onClick={() => handleClick('en')} src={unitedstates} alt="" />
                <img src={germany} onClick={() => handleClick('de')} className="flags" alt="" />
        </div>
    </div>
</div>
  )
}

export default Preheader