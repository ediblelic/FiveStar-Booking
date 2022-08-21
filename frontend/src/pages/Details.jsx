import React from 'react'
import Navigation from '../components/homecomponents/Navigation'
import Preheader from '../components/homecomponents/Preheader'
import { useTranslation } from 'react-i18next'
import Detailssection from '../components/detailscomponents/Detailssection'
import Footersection from '../components/errorcomponents/Footersection'
import Informationssection from '../components/detailscomponents/Informationssection'
function Details() {
    const [t,i18n] = useTranslation()
  return (
    <>
    <Preheader language={t} setLanguage={i18n} />
    <Navigation  t={t} i18n={i18n}/>
    <Detailssection t={t} i18n={i18n} />
    <Informationssection t={t} i18n={i18n} />
    <Footersection t={t} i18n={i18n} /> 
    </>
  )
}

export default Details