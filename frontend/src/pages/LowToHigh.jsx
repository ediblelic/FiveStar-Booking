import React from 'react'
import { useTranslation } from 'react-i18next'
import Navigation from '../components/homecomponents/Navigation'
import Preheader from '../components/homecomponents/Preheader'
import LowToHighSection from '../components/lowtohighcomponents/LowToHighSection'
import { FilterHotelsProvider } from '../FilterHotelsContext'
function LowToHigh() {
    const [t,i18n] = useTranslation()

  return (
    <>
        <Preheader language={t} setLanguage={i18n} />
        <Navigation t={t} i18n={i18n} />
        <LowToHighSection  t={t} i18n={i18n} />
    </>
  )
}

export default LowToHigh