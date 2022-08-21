import React from 'react'
import Navigation from '../components/homecomponents/Navigation'
import Preheader from '../components/homecomponents/Preheader'
import LoginSection from '../components/logincomponents/LoginSection'
import { useTranslation } from 'react-i18next'

import Footersection from '../components/errorcomponents/Footersection'
function Login() {
  
    const [t,i18n] = useTranslation()

  return (
    <>
    <Preheader language={t} setLanguage={i18n} />
    <Navigation  t={t} i18n={i18n} />
    <LoginSection  t={t} i18n={i18n} />
  
    <Footersection t={t} i18n={i18n} />
    </>
  )
}

export default Login