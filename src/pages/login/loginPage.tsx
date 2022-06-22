import React, { useState } from 'react'
import CreateAccount from '../../components/login/createAccount'
import LoginView from '../../components/login/loginView'
import * as S from './loginPage.styled'

const Login = () => {
  const [hasAccount, setHasAccount] = useState(true)

  const onHasAccountCheckboxChange = () => {
    setHasAccount(!hasAccount)
  }

  return (
      <S.Form>
        {hasAccount ? <LoginView/> : <CreateAccount/>}
        <S.Label>
          <input type="checkbox" checked={!hasAccount} onClick={onHasAccountCheckboxChange}/>
          <label>I don t have account</label>
        </S.Label>

     </S.Form>
  )
}

export default Login
