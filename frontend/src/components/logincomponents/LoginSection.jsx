import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../AuthContext'
import './loginsection.css'

function LoginSection(props) {
   const {t,i18n} = props
   let {loginUser} = useContext(AuthContext)
   let {user} = useContext(AuthContext)
    
  return (
    <Fragment>
    <div className="headerlogin">
        <div className='container'>
            <div className="hotels">
                <div className="hotelsearch">
                    <h2 className='smalltitlelogin'>{t('myaccount.1')}</h2>
                </div>
                <div className="hotelnavlogin">
                    <Link to='/' className='tohome'>
                    <h2>{t('home.1')}</h2>
                    </Link>
                    <h2>/</h2>
                    <h2>{t('myaccount.1')}</h2>     
                </div>
            </div>
        </div>
    </div>
    <div className="loginform">
        <div className="logindisplay">
            <div className="container">
                <h1 className='login'>{t('login.1')}</h1>
                <h1 className='login'>|</h1>
                <Link to={'../register'}>
                 <h1 className='register'>{t('reg.1')}</h1>
                </Link>
            </div>
        </div>
            <div className="form">
                <div className="container">
                    <div className="lables-inputs">
                        <form  onSubmit={loginUser} >
                            <p  className='username'>Username *</p>
                            <input name='username' className='usernameinput' type="text"  />
                            <p className='username'>Password *</p>
                            <input className='usernameinput' name='password' type="password"  />
                            <input type="checkbox" name='login'  />
                            <label htmlFor="login">Remember me </label>
                            <button  className='loginbtn'>{t('login.1')}</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    </Fragment>
  )
}

export default LoginSection