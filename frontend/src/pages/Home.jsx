import React from 'react'
import Preheader from '../components/homecomponents/Preheader'
import Navigation from '../components/homecomponents/Navigation'
import MainSection from '../components/homecomponents/MainSection'
import { useTranslation } from 'react-i18next';
import Sdsection from '../components/homecomponents/Sdsection';
function Home() {
  const [t,i18n] = useTranslation()
  
  return (
    <>
        <Preheader language={t} setLanguage={i18n}/>
        <Navigation t={t} i18n={i18n} />
        <MainSection t={t} i18n={i18n} />   
        <Sdsection  t={t} i18n={i18n}  />
         
     </>
  )
}

export default Home