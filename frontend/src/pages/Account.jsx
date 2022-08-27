import React from 'react'
import AccountDetailsSection from '../components/accountcomponents/AccountDetailsSection'
import { useTranslation } from 'react-i18next'
import Navigation from '../components/homecomponents/Navigation'
import Preheader from '../components/homecomponents/Preheader'
function Account() {
    const [t,i18n] = useTranslation()
  return (
    <>
    <Preheader language={t} setLanguage={i18n}/>
    <Navigation t={t} i18n={i18n} />
    <AccountDetailsSection t={t} i18n={i18n} />
    </>
  )
}

export default Account