import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/navassets/logo.png'
import search from '../../assets/navassets/search.svg'
import shopping from '../../assets/navassets/shopping.svg'
import menu from '../../assets/navassets/menu.svg'
import { useContext } from 'react'
import AuthContext from '../../AuthContext'
import { useEffect,useState } from 'react'
import BookHotelContext from '../../BookHotelContext'
function Navigation(props) {
    const {t,i18n} = props
    const [scrollPosition, setScrollPosition] = useState(0);
    const [changeNav,setChangeNav] = useState(false)
    const [overlay,setOverlay] = useState(false)
    let {user} = useContext(AuthContext)
    let { numCardItems } = useContext(BookHotelContext)
    const [card,setCard] = useState(0)
    let { logoutUser } = useContext(AuthContext)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            };
            }, []);
    
   
  return (
    <>
        <div className={overlay ? 'overlay' : 'overlayhidden'}>
            <div className="exit">
                <span className="closebtn" onClick={() => {setOverlay(false)}} title="Close Overlay">x</span>
            </div>
            <div className="searchbar">
                <input className='searchinput' type="text" placeholder='SEARCH FOR...' name="search" id="" />
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
        <div  className={scrollPosition >= 34 ? 'whiteNavigation' : 'Navigation' }>
            <div className="container">
                <div className={scrollPosition >= 34 ? 'brandwhite' : 'brand'}>
                    <Link to={'/'}>
                        <img className='logo' src={logo} alt="" />
                    </Link>
                </div>
                <div  className={scrollPosition >= 34 ? 'navlistwhite' : 'navlist'}>
                    <ul>
                        <Link to={'/'} >
                            <li className='active'>{t('home.1')}</li>
                        </Link>
                        <li>Rooms</li>
                        {user ? <li onClick={logoutUser}>Logout</li> : <Link className={scrollPosition >= 34 ? 'linkcolornavwhite' : 'linkcolornav'} to={'/login'}><li>Login</li> </Link> }
                        <li>{t('blog.1')}</li>
                        {user ? <Link className={scrollPosition >= 34 ? 'linkcolornavwhite' : 'linkcolornav'} to={'/account'}><li>{t('myaccount.1')}</li></Link>  : null}
                    </ul>
                    <img className={scrollPosition >= 34 ? 'naviconswhite' : 'navicons'} onClick={() => setOverlay(true)} src={search} alt="" />
                    <span  data-items={numCardItems ? numCardItems.length : 0} className='items-in-card'>
                    <img className={scrollPosition >= 34 ? 'cardwhite' : 'card'} src={shopping} alt="" />
                    </span>
                    <img className={scrollPosition >= 34 ? 'naviconswhite' : 'navicons'} src={menu} alt=""  />
                </div>
            </div>
        </div>
    </>
  )
}

export default Navigation