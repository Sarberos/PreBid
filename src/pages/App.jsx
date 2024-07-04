
import { useState,useEffect,useLayoutEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import './../App.css'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import { SimpleModal } from '../components/SImpleModal/SimpleModal'
import LoginModal from '../components/modal_windows/LoginModal/LoginModal'
import Registration from '../components/modal_windows/Registration/Registration'
import Preloader from '../components/Tools/Preloader';
import { carInfThunk, setFiltersInf, setIsAuth, setTransportsInf, setUserInf, userFiltersThunk, userInfThunk } from '../app/redux/mainSlice';



function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [regStatus, setregStatus] = useState(false);

  const isLoading = useSelector((state) => {return state.user.isLoading;});
  const isAuth = useSelector((state) => {return state.user.isAuth;});
  const user = useSelector((state) => state.user.userInf.user);
  const dispatch = useDispatch();

const handlingPromise=(actionCreator)=>{
      return new Promise( (resolve,reject)=>{
        resolve(dispatch(actionCreator))
      })
  }
  useEffect(() => {
    if(user===0){
      if(localStorage.getItem('access_token')){
      const userInfPromise = handlingPromise(userInfThunk());
        userInfPromise.then((response) => {
          dispatch(setUserInf(response?.payload?.data));
          dispatch(setIsAuth(response?.payload?.data?.status))
        });
      const filtersPromise=handlingPromise(userFiltersThunk())
      filtersPromise.then(response=>{dispatch(setFiltersInf((response.payload.data.content)))});
      const carListPromise=handlingPromise(carInfThunk())
      carListPromise.then(response=>{dispatch(setTransportsInf(response.payload.data))})
    }
    }else {
      console.log('user inf been exist in appp')
    }
    
  }, [dispatch]);
  if (isLoading) {
    return <Preloader />;
  } else {
    return (
      
      <>
        <Header openLogin={() => setLoginStatus(true)} />
        {/* <Main
          openRegistration={() => setregStatus(true)}
          openLogin={() => setLoginStatus(true)}
        />
        <Footer />

        <SimpleModal
          isOpen={loginStatus}
          onClose={() => setLoginStatus(false)}
        >
          <LoginModal
            isRegOpen={regStatus}
            onClose={() => setLoginStatus(false)}
            openRegistration={() => setregStatus(true)}
          />
        </SimpleModal>

        <SimpleModal isOpen={regStatus} onClose={() => setregStatus(false)}>
          <Registration />
        </SimpleModal> */}
      </>
    );
  }
}

export default App
