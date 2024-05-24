import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { SimpleModal } from './components/SImpleModal/SimpleModal'
import LoginModal from './components/modal_windows/LoginModal/LoginModal'
import Registration from './components/modal_windows/Registration/Registration'
import Preloader from './components/Tools/Preloader';
import { setIsAuth, setUserInf, userInfThunk } from './redux/counterSlice';

function App() {
  const [moduleStatus, setmoduleStatus] = useState(false);
  const [regStatus, setregStatus] = useState(false);

  const isLoading = useSelector((state) => {
    return state.user.isLoading;
  });
  const userInf = useSelector((state) => {
    return state.user.userInf;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const response = dispatch(userInfThunk());
    const myPromise = new Promise((resolve, reject) => {
      resolve(response);
    });
    myPromise.then((response) => {
      dispatch(setUserInf(response.payload.data));
      dispatch(setIsAuth(response.payload.data.status))
    });
  }, [dispatch]);

  if (isLoading) {
    return <Preloader />;
  } else {
    return (
      <>
        <Header openLogin={() => setmoduleStatus(true)} />
        <Main
          openRegistration={() => setregStatus(true)}
          openLogin={() => setmoduleStatus(true)}
        />
        <Footer />

        <SimpleModal
          isOpen={moduleStatus}
          onClose={() => setmoduleStatus(false)}
        >
          <LoginModal
            isRegOpen={regStatus}
            onClose={() => setmoduleStatus(false)}
            openRegistration={() => setregStatus(true)}
          />
        </SimpleModal>

        <SimpleModal isOpen={regStatus} onClose={() => setregStatus(false)}>
          <Registration />
        </SimpleModal>
      </>
    );
  }
}

export default App
