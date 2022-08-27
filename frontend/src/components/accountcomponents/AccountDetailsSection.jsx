import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { UserProfileContext } from '../../UserProfileContext'
import './accountdetailssection.css'
function AccountDetailsSection(props) {
    const { t } = props 
    const avatar = 'https://meiadose.com.pt/wp-content/uploads/2015/04/default-user-avatar.png'
    const [userAvatar,setUserAvatar] = useState()
    const { userData } = useContext(UserProfileContext)
    const { extendedUserData } = useContext(UserProfileContext)
   

    console.log(extendedUserData)
  return (
    <div className='accountpage'>
        <div className="container">
            <div className="hotels">
                <div className="hotelsearch">
                    <h2 className='smalltitle'>{t('myacc.1')}</h2>
                </div>
                <div className="hotelnav">
                    <Link to='/' className='tohome'>
                    <h2>{t('myaccount.1')}</h2>
                    </Link>
                    <h2>/</h2>
                    <Link to={'../'} className='tohome'>
                    <h2>{t('home.1')}</h2>
                    </Link>
                </div>
            </div>
        </div>
        <div className="accountdetails">
            <div className="container">
                <div className="accountinfos">
                    <div className="userNam">
                        <img src="../backend/backend/profile_images/slika_o9P0v4R.jpg" alt="Avatar"  class="avatar"   />
                       
                          
                    </div>

                    <div className="userNam">
                        <h2>Username:</h2>
                        <h2>{extendedUserData.username}</h2>
                    </div>
                    <div className="userNam">
                        <h2>Full Name:</h2>
                        <h2>{extendedUserData ? extendedUserData.first_name : 'None'}</h2>
                    </div>
                    <div className="userNam">
                        <h2>Email address:</h2>
                        <h2>{extendedUserData.email}</h2>
                    </div>
                    <div className="userNam">
                        <h2>Phone Number:</h2>
                        <h2>{userData.phone}</h2>
                    </div>
                    <div className="bio">
                        <h2>Biography:</h2>
                        <h3>{userData.bio}</h3>
                    </div>
                
                </div>
             
            </div>
        </div>
    </div>
  )
}

export default AccountDetailsSection