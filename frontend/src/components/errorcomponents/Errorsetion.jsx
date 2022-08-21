import React from 'react'
import Preheader from '../homecomponents/Preheader'
import Navigation from '../homecomponents/Navigation'
import { useTranslation } from 'react-i18next'

import {Link} from 'react-router-dom'
import './errorsection.css'
function Errorsetion(props) {
    const {t,i18n} = props
    return (
    <>
        <Preheader language={t} setLanguage={i18n} />
        <Navigation t={t} i18n={i18n} />
        <div className="pagenotfound">
            <div className="maincontent">
                <p style={{color:'orange'}}>{t('smalltitle.1')}</p>
                <h1 style={{fontSize:'3rem',textTransform:'uppercase',letterSpacing:'.2rem'}}>{t('404.1')}</h1>
                <hr  width="200px" color='orange'/>
                <p className='dummylorem'>{t('dummylorem.1')}</p>
                <input type="text" placeholder={t('search.1')} />
                <button className='next'>{t('search.1')}</button>
                <Link to={'/'} className="tohome">
                    <p>{t('togo.1')}</p>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Errorsetion