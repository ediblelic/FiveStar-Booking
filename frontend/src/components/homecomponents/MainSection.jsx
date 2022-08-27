import React from 'react'
import './mainsection.css'
import { useState,useEffect } from 'react'
import { Wave } from 'react-animated-text';
import 'react-calendar/dist/Calendar.css';
import Hotels from '../../pages/Hotels';
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'
import format from 'date-fns/format';
import { useContext } from 'react';
import { NumofpeopleContext } from '../../NumofpeopleContext';

function MainSection(props) {
  const {t,i18n} = props
  const [checkin, setCheckin] = useState(new Date());
  const [openCalendar,setOpenCalendar] = useState(false)
  const [opensdCalendar,setOpensdCalendar] = useState(false)
  const [checkout, setCheckout] = useState(new Date());
  const [numofpeople,setNumofpeople] = useContext(NumofpeopleContext)

  if (openCalendar == true && opensdCalendar == true){
    setOpenCalendar(false)
    setOpensdCalendar(false)
  }
 

  

  return (
  <>
      <div className="slider">
        <div className="animatetext">
          <h2>{t('title.1')}</h2>
        </div>
        <h1 className='animated' id='main'> <Wave text={t('maintitle.1')}
          effectChange={.2}
          effect="verticalFadeIn"
          iterations={1} /></h1>
        <hr color='orange' width="20%" />
        <p className='shortdesc_style'>{t('shortdesc.1')}</p>





        <div className="input__fields__container">
          <div className="container">
            <div className="inputfields">


              <div className="alllabels">
                <h3 className='label-label'>Check in:</h3>
                {openCalendar && <Calendar className='calendarefr' onChange={setCheckin} minDate={new Date()} />}
                <input className='checkininput' type="date" name='vreme' onClick={() => setOpenCalendar(!openCalendar)} onChange={setCheckin} value={format(checkin, 'yyyy-MM-dd')} />
              </div>

              <div className="alllabels">
                <h3 className='label-label'>Check-out:</h3>
                {opensdCalendar && <Calendar className="calendare" onChange={setCheckout} minDate={checkin} />}
                <input type="date" value={format(checkout, 'yyyy-MM-dd')} onChange={setCheckout} onClick={() => setOpensdCalendar(!opensdCalendar)} />
              </div>

              <div className="alllabels">
                <h3 className='label-label'>{t('numpeople.1')}:</h3>
                <input type="number" placeholder='1 - 7' onChange={(e) => setNumofpeople(e.target.value)} value={numofpeople} />
              </div>




              <div className="booknow">

                <Link to={parseInt(numofpeople) > 9 || parseInt(numofpeople) <= 0 || numofpeople === '' ? '/error' : '/hotels'} >
                  <button className='btn'> {t('booknow.1')} </button>
                </Link>
              </div>
            </div>
          </div>
          </div>




      </div>
      </>
  )
  
  }

export default MainSection

