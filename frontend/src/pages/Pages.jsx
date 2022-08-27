import React from 'react'
import Home from './Home'
import { Route,Routes } from 'react-router'
import { useLocation } from 'react-router'
import Error from './Error'
import Hotels from './Hotels'
import { NumofpeopleProvider } from '../NumofpeopleContext'
import {FilterHotelsProvider} from '../FilterHotelsContext'
import Details from './Details'
import ScrollOnTopComponent from '../components/scrollontopcomponents/ScrollOnTopComponent'
import LowToHigh from './LowToHigh'
import HighToLow from './HighToLow'
import Login from './Login'
import  { AuthProvider } from '../AuthContext'
import Register from './Register'
import { RegisterUserProvider } from '../RegisterUserContext'
import { RegisterUserInfoProvider } from '../RegisterUserInfoContext'
import { BookHotelProvider } from '../BookHotelContext'
import { SendWelcomeEmailProvider } from '../SendWelcomeEmailContext'
import Account from './Account'
import { UserProfileProvider } from '../UserProfileContext'
function Pages() {
    const location = useLocation()

  return (
    <>
      <FilterHotelsProvider>
        <NumofpeopleProvider>
            <ScrollOnTopComponent>
                <AuthProvider>
                    <RegisterUserProvider>
                        <RegisterUserInfoProvider>
                              <SendWelcomeEmailProvider>
                                    <BookHotelProvider>
                                        <UserProfileProvider>
                                        <Routes location={location} key={location.pathname}>
                                              <Route path="/" exact element={<Home  />} />
                                              <Route path='/hotels' element={<Hotels />} />
                                              <Route path='/error' element={<Error />} />
                                              <Route path='/hotels/low-to-high' element={<LowToHigh />} />
                                              <Route path='/hotels/high-to-low' element={<HighToLow />} />
                                              <Route path='/hotels/:name' element={<Details />} />
                                              <Route path='/login' element={<Login />} />
                                              <Route path='/register'  element={<Register />} />
                                              <Route path='/account' element={<Account />} />
                                        </Routes>
                                        </UserProfileProvider>
                                      </BookHotelProvider>
                              </SendWelcomeEmailProvider>
                        </RegisterUserInfoProvider>
                    </RegisterUserProvider>
                </AuthProvider>
            </ScrollOnTopComponent>
          </NumofpeopleProvider>
      </FilterHotelsProvider>
        </>
  )
}

export default Pages