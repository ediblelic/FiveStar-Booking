import React from 'react'
import Hotelssection from '../components/hotelscomponents/Hotelssection'
import { NumofpeopleProvider } from '../NumofpeopleContext'
import { useTranslation } from 'react-i18next';
import Preheader from '../components/homecomponents/Preheader';
import Navigation from '../components/homecomponents/Navigation';
import Footersection from '../components/errorcomponents/Footersection';
import { FilterHotelsProvider } from '../FilterHotelsContext';
function Hotels() {
  const [t,i18n] = useTranslation()
  return (
    <>

      <Preheader language={t} setLanguage={i18n}></Preheader>
      <Navigation t={t} i18n={i18n}></Navigation>
      <Hotelssection t={t} i18n={i18n} />
      <Footersection  t={t} i18n={i18n}/>
    </>
  )
}

export default Hotels
