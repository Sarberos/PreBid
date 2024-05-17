import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Login from './components/Header/Login/Login'

function App() {
  const [loginOn, setLoginStatus]=useState(false)
  return (
    <>
      <Header setLoginStatus={setLoginStatus} />
      <Main />
      <Footer/>
      <Login loginOn={loginOn} setLoginStatus={setLoginStatus} />
    </>
  )
}

export default App
