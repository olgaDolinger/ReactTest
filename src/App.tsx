import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/main'
import Promo from './pages/promo/promo'
import Reports from './pages/reports/reports'
import * as S from './App.styled'
import Login from './pages/login/loginPage'
import { useSelector } from 'react-redux'
import { StoreInterface } from './store/store.interface'
import UserPage from './pages/userPage/userPage'
import UserMenu from './components/menu/userMenu/userMenu'

function App () {
  const isUserLoggedIn = useSelector((store: StoreInterface) => store.user.isUserLoggenIn)

  const [isUserMenuVisible, showUserMenu] = useState(isUserLoggedIn)

  const onUserClick = () => {
    showUserMenu(!isUserMenuVisible)
  }

  return (
    <>
        <BrowserRouter>
            <S.NavBar>
                <S.NavItem to='/'>
                    <div>MAIN</div>
                </S.NavItem>
                <S.NavItem to='/promo'>
                    <div>Promo</div>
                </S.NavItem>
                <S.NavItem to='/reports'>
                    <div>Reports</div>
                </S.NavItem>
                <S.UserMenu>
                    {!isUserLoggedIn &&
                        <S.NavItem to='/login'>
                            <div>Login</div>
                        </S.NavItem>
                    }
                    {isUserLoggedIn &&
                        <S.NavItem to='/user'>
                            <S.UserButton onClick={onUserClick}>User</S.UserButton>
                            {isUserMenuVisible && <UserMenu/>}
                        </S.NavItem>
                    }
                </S.UserMenu>
            </S.NavBar>

            <Routes>
                <Route path='/' element={< Main />}></Route>
                <Route path='/promo' element={< Promo />}></Route>
                <Route path='/reports' element={< Reports />}></Route>
                <Route path='/login' element={< Login />}></Route>
                <Route path='/user' element={< UserPage />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
