import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { SimpleModal } from './components/SImpleModal/SimpleModal'
import LoginModal from './components/modal_windows/LoginModal/LoginModal'

function App() {
  const [loginOn, setLoginStatus]=useState(false)
  const [moduleStatus, setmoduleStatus]=useState(false)


  return (
    <>
      <SimpleModal 
      isOpen={moduleStatus}
      onClose={()=>setmoduleStatus(false)}>
        <LoginModal />
      </SimpleModal>
      <Header setLoginStatus={setmoduleStatus} />
      <Main />
      <Footer/>
    </>
  )
}

export default App
