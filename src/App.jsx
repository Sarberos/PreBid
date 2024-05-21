import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { SimpleModal } from './components/SImpleModal/SimpleModal'
import LoginModal from './components/modal_windows/LoginModal/LoginModal'
import Registration from './components/modal_windows/Registration/Registration'

function App() {
  const [moduleStatus, setmoduleStatus]=useState(false)
  const [regStatus, setregStatus]=useState(false)

  return (
    <>
      <Header  openLogin={()=>setmoduleStatus(true)}/>
      <Main  openRegistration={()=>setregStatus(true)} openLogin={()=>setmoduleStatus(true)} />
      <Footer/>

      <SimpleModal 
      isOpen={moduleStatus}
      onClose={()=>setmoduleStatus(false)}>
        <LoginModal isRegOpen={regStatus}  onClose={()=>setmoduleStatus(false)} openRegistration={()=>setregStatus(true)} />
      </SimpleModal>

      <SimpleModal 
      isOpen={regStatus}
      onClose={()=>setregStatus(false)}>
        <Registration />
      </SimpleModal>
    </>
  )
}

export default App
