import React from 'react'

import { useTranslation } from 'react-i18next'
import HighToLowSection from '../components/hightolowcomponent/HighToLowSection'
import Navigation from '../components/homecomponents/Navigation'
import Preheader from '../components/homecomponents/Preheader'

function HighToLow() {
    const [t,i18n] = useTranslation()
  return (
    <>
        
        <Preheader language={t} setLanguage={i18n} />
        <Navigation t={t} i18n={i18n} />
        <HighToLowSection  t={t} i18n={i18n} />
    
    </>
  )
}

export default HighToLow