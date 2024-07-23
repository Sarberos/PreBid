
import React, { useState,useEffect,useLayoutEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import s from './App.module.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { SimpleModal } from './components/SImpleModal/SimpleModal'
import LoginModal from './components/modal_windows/LoginModal/LoginModal'
import Registration from './components/modal_windows/Registration/Registration'
import Preloader from './components/Tools/Preloader/Preloader';
import { carInfThunk, setFiltersInf, setIsAuth, setTransportsInf, setUserInf, userFiltersThunk, userInfThunk } from './redux/mainSlice';
import { useFilterInf } from './components/hooks/car_list/filter_inf';
import { useUserInf } from './components/hooks/user-Inf/useUserInf';
import { log } from 'react-modal/lib/helpers/ariaAppHider';



function App({children}) { 
  
  const dispatch =useDispatch()
  const userStore =useSelector(state=> state.user)
  const [loginStatus, setLoginStatus] = useState(false);
  const [regStatus, setregStatus] = useState(false);
  const [isLoading, setIsLoading]= useState(false)

  const {data:userInf,isLoading:userInfLoading,isFetching:userInfFetching}= useUserInf();

 

  useEffect(()=>{
    if(loginStatus===true){
      document.body.style.overflow='hidden'
    }else {
      document.body.style.overflow='scroll'
    }

  },[loginStatus])
 

  useEffect(()=>{
    setIsLoading(userStore["isLoading"])
  },[userStore["isLoading"]])

  useEffect(()=>{
      if(userInf){
      dispatch(setUserInf(userInf))}
  },[userInf])


  
  const modifiedChildren = React.Children.map(children, child => {  
    if (React.isValidElement(child)) {  
      return React.cloneElement(child, {  
        openRegistration:() => setregStatus(true),
        openLogin:() => setLoginStatus(true),
      });  
    } 
    return child;  
  });  

    if (isLoading || userInfLoading ) {
      return <Preloader />;
    }
    return (
      
      <div className={s.wrapperForAll}>
        <Header openLogin={() => setLoginStatus(true)} />
          <div className={s.modified_children}>
             {modifiedChildren}
          </div>
         

          <SimpleModal
            isOpen={loginStatus}
            onClose={() => setLoginStatus(false)}
          >
            <LoginModal
              isRegOpen={regStatus}
              openRegistration={() => setregStatus(true)}
              setLoginStatus={(value)=>setLoginStatus(value)}
            />
          </SimpleModal>
          <SimpleModal isOpen={regStatus} onClose={() => setregStatus(false)}>
            <Registration />
          </SimpleModal>

        <Footer />
      </div>
    )
    }
export default App
