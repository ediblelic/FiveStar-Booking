import React from 'react'
import './sdsection.css'
import main from '../../assets/mainassets/main.jpg'
import { useContext } from 'react'
import SendWelcomeEmailContext from '../../SendWelcomeEmailContext'

function Sdsection(props) {
    const {t,i18n} = props
    const { sendBookingEmail } = useContext(SendWelcomeEmailContext)
  return (
        <>
    <button onClick={sendBookingEmail}>SEND MAIL</button>
        </>
  )
}

export default Sdsection