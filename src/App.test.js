// import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './components/Login';

describe('App' , () => {
  let appWrapper

  beforeAll(() =>{
    appWrapper = shallow(<App/>)
  })

  test('should show login page', () => {
    const loginPage = appWrapper.find(Login)

    expect(loginPage).toBeTruthy()
  })

  test('should show login page', () => {
    const appProps = appWrapper.props()

    // expect(appProps).not.toBeNull()
    expect(appProps.history).not.toBeNull()

  })
  

  test('should ', () => {
    const loginForm = appWrapper.find('form')

    expect(loginForm.props).toBeDefined()
  })
  
  
})
