import React from 'react'
import {render,screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import {createMemoryHistory} from 'history'
import LoginView from './loginView'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { Router } from 'react-router'

describe('LoginView', () => {
  const history = createMemoryHistory()

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <LoginView/>
        </Router>
       
      </Provider>);

  })
  
  describe('when user has account', () => {
    it('should login and password be empty on start', () => {

      fireEvent.change(screen.getByTestId('login'), {target: { value: "user" }} )
      fireEvent.change(screen.getByTestId('password'), {target: { value: "pass" }} )

      fireEvent.click(screen.getByRole('button'));

      expect(history.location.pathname).toBe('/user');
    })

   
  })

  describe('when a new user', () => {
    it('should login and password not be empty before submit', () => {
      fireEvent.change(screen.getByTestId('login'), {target: { value: "" }} )
      fireEvent.change(screen.getByTestId('password'), {target: { value: "" }} )

      fireEvent.click(screen.getByRole('button'))
      expect(history.location.pathname).toBe('/');
    })
  })

  describe('when user logged in', () => {
    it('should redirect to User page', () => {

    })
  })
})


