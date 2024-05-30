import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import CarFullProfile from './components/Main/CarList/RightColumn/SecRow/RowList/CarFullProfile/CarFullProfile.jsx'
import NotFoundPage from './utilits/NotFoundPage/NotFoundPage.jsx'
import store from './redux/store.jsx'
import { Provider } from 'react-redux'
import Profile from './components/Profile/Profile.jsx'

window.store=store;

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      errorElement:<NotFoundPage />
    },
    {
      path: '/CarFullProfile/:profileId',
      element: <CarFullProfile/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
  ]
)

if(localStorage.getItem('access_token')){
      const userInfPromise= new Promise((resolve,reject)=>{
        resolve(dispatch(userInfThunk()))
      })
      userInfPromise.then(response=>{
        dispatch(setUserInf(response.payload.data));
        dispatch(setIsAuth(response.payload.data.status))
      }) 
    }

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>

) 
