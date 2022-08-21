import React from 'react'
import Preheader from '../components/homecomponents/Preheader'
import Navigation from '../components/homecomponents/Navigation'
import { useTranslation } from 'react-i18next'
import Errorsetion from '../components/errorcomponents/Errorsetion'
import Footersection from '../components/errorcomponents/Footersection'
function Error() {
    const [t,i18n] = useTranslation()
    return (
    <>
        <Errorsetion  t={t} i18n={i18n}/> 
        <Footersection t={t} i18n={i18n} />  
    </>
    )
}

export default Error