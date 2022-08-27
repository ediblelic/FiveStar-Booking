import React from 'react'
import './sdsection.css'

import { useContext } from 'react'
import SendWelcomeEmailContext from '../../SendWelcomeEmailContext'

function Sdsection(props) {
    //const {t} = props
    const { sendBookingEmail } = useContext(SendWelcomeEmailContext)
  return (
        <>
    <button onClick={sendBookingEmail}>SEND MAIL</button>
        </>
  )
}

export default Sdsection