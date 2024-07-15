
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



function App({children}) {
  const [loginStatus, setLoginStatus] = useState(false);
  const [regStatus, setregStatus] = useState(false);

  let  isLoading = false;
  const isAuth = useSelector((state) =>  state.user.isAuth);
  const user = useSelector((state) => state.user.userInf.user);
  const dispatch = useDispatch();

  const handlingPromise=(actionCreator)=>{
      return new Promise( (resolve,reject)=>{
        resolve(dispatch(actionCreator))
      })
  }

  if(localStorage.getItem('access_token')){
    const {data: userInfo, isLoading:userInfoLoading}=useUserInf()
    isLoading=userInfoLoading;
    dispatch(setUserInf(userInfo ? userInfo:''));
    dispatch(setIsAuth(userInfo?.status))
  }
  
  const modifiedChildren = React.Children.map(children, child => {  
    if (React.isValidElement(child)) {  
      return React.cloneElement(child, {  
        openRegistration:() => setregStatus(true),
        openLogin:() => setLoginStatus(true),
      });  
    } 
    return child;  
  });  


  if (isLoading) {
    return <Preloader />;
  } else {
    return (
      
      <div className={s.wrapperForAll}>
        <Header openLogin={() => setLoginStatus(true)} />
          {modifiedChildren}

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
    );
  }
}

export default App
