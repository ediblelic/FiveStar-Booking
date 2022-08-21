import React from 'react'
import Preheader from '../components/homecomponents/Preheader'
import Navigation from '../components/homecomponents/Navigation'
import { useTranslation } from 'react-i18next'
import RegisterSection from '../components/registercomponent/RegisterSection'
import Footersection from '../components/errorcomponents/Footersection'

function Register() {
    const [t,i18n] = useTranslation()
    return (
        <>
            <Preheader language={t} setLanguage={i18n} />
            <Navigation t={t} i18n={i18n} />
            <RegisterSection t={t} i18n={i18n}  />
            <Footersection t={t} i18n={i18n} />
        </>
    )
}

export default Register