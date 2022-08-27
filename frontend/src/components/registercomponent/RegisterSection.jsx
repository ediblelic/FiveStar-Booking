import React,{useContext} from 'react'
import './registersecion.css'
import {Link} from 'react-router-dom'
import RegisterUserContext from '../../RegisterUserContext'
import RegisterUserInfoContext from '../../RegisterUserInfoContext'

function RegisterSection(props) {
    const { t } = props
    let { regUser } = useContext(RegisterUserContext)
    const { emailRegex } = useContext(RegisterUserInfoContext)
    let {regInfo} = useContext(RegisterUserInfoContext)
  
    const { handleForm } = useContext(RegisterUserInfoContext)
    let { validForm } = useContext(RegisterUserInfoContext)
    let { userValid } = useContext(RegisterUserInfoContext)
    let { fullNameValid } = useContext(RegisterUserInfoContext)
    let { passwordValid } = useContext(RegisterUserInfoContext)
    

 
  return (
    <>
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
                <Link to={'../login'}>
                <h1 className='register'>{t('login.1')}</h1>
                </Link>
                <h1 className='login'>|</h1>
                 <h1 className='login'>{t('reg.1')}</h1>
            </div>
        </div>
        </div>
            <div className="form">
                <div className="container">
                    <div className="lables-inputs">
                        <form onSubmit={regUser} >
                            <p  className='username'>Username *</p>
                            <input onChange={handleForm}  name='username' className='usernameinput' value={regInfo.username} type="text"  />
                             {!userValid  &&   <p className="warrning" >{t('usernameisnotgood.1')}</p>   }
                            <p className='username'>{t('fullname.1')} *</p>
                            <input onChange={handleForm} className='usernameinput' name='first_name' value={regInfo.first_name} type="text"  />
                            {fullNameValid ? null : <p className='warrning'>{t('errorfullname.1')}</p>}
                            <p  className='username'>Email *</p>
                            <input onChange={handleForm} name='email'value={regInfo.email}  className='usernameinput'  type="email"  />
                            {emailRegex.test(regInfo.email)  ? null: <p className='warrning'>{t('errormail.1')}</p>}
                            <p className='username'>Password *</p>
                            <input onChange={handleForm} className='usernameinput' name='password' value={regInfo.password} type="password"  />
                            {passwordValid ? null : <p className='warrning'>{t('errorpassword.1')}</p>}
                            <input type="checkbox" name='login'  />
                            <label htmlFor="login">Remember me </label>
                            <button disabled={!validForm} className='loginbtn' >{t('reg.1')}</button>
                        </form>
                    </div>
                </div>
                </div>
            
    </>
  )
}

export default RegisterSection