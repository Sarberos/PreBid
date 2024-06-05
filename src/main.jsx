import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import CarFullProfile from './components/Main/CarList/RightColumn/SecRow/RowList/CarFullProfile/CarFullProfile.jsx'
import NotFoundPage from './utilits/NotFoundPage/NotFoundPage.jsx'
import store from './redux/store.jsx'
import { Provider } from 'react-redux'
import { MyProfile} from './components/ProfileSubComp/MyProfile/MyProfile.jsx'
import Profile from './components/Profile/Profile.jsx'
import { DeliveryAdress } from './components/ProfileSubComp/DeliveryAdress/DeliveryAdress.jsx'
import { TariffPlan } from './components/ProfileSubComp/TariffPlan/TariffPlan.jsx'
import { Support } from './components/ProfileSubComp/Support/Support.jsx'
import { NotificationSettings } from './components/ProfileSubComp/NotificationSettings/NotificationSettings.jsx'

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
      element:<Profile><MyProfile/></Profile>
    },
    {
      path: '/deliveryAdress',
      element: <Profile><DeliveryAdress/></Profile>
    },
    {
      path: '/notifications',
      element: <Profile><NotificationSettings/></Profile>
    },
    {
      path: '/support',
      element: <Profile><Support/></Profile>
    },
    {
      path: '/tarifPlan',
      element: <Profile><TariffPlan/></Profile>
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router}><App/></RouterProvider>
  </React.StrictMode>
  </Provider>

) 
