import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
import { Auctions } from './components/Navigation/Auctions/Auctions.jsx'
import { MySales } from './components/Navigation/MySales/MySales.jsx'
import { MyOrders } from './components/Navigation/MyOrders/MyOrders.jsx'
import { MyRates } from './components/Navigation/MyRates/MyRates.jsx'
import { MyFavourite } from './components/Navigation/MyFavourite/MyFavourite.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MyLots } from './components/Navigation/MySales/MyLots/MyLots.jsx'
import { CoordinationLots } from './components/Navigation/MySales/CoordinationLots/CoordinationLots.jsx'
import { CreateLot } from './components/Navigation/MySales/CreateLot/CreateLot.jsx'
import { WaitingLots } from './components/Navigation/MySales/WaitingLots/WaitingLots.jsx'
import { SoldLots } from './components/Navigation/MySales/SoldLots/SoldLots.jsx'
import { PayWaiting } from './components/Navigation/MyOrders/PayWaiting/PayWaiting.jsx'
import { Purchases } from './components/Navigation/MyOrders/PurchasesHistory/Purchases.jsx'
import { PeekUpLot } from './components/Navigation/MyOrders/PeekUpLot/PeekUpLot.jsx'

import './index.css'
import './utilits/i18n/i18n.jsx'
import Main from './components/Main/Main.jsx'

window.store=store;

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App><Main/></App>,
      errorElement:<NotFoundPage />,
    },
    {
      path: '/CarFullProfile/:profileId',
      element:<App><CarFullProfile/></App> ,
    },
    {
      path: '/profile',
      element:<App><Profile><MyProfile/></Profile></App> ,
    },
    {
      path: '/deliveryAdress',
      element:<App><Profile><DeliveryAdress/></Profile></App> ,
    },
    {
      path: '/notifications',
      element: <Profile><NotificationSettings/></Profile>,
    },
    {
      path: '/support',
      element:<App><Profile><Support/></Profile></App> ,
    },
    {
      path: '/tarifPlan',
      element:<App><Profile><TariffPlan/></Profile></App> ,
    },
    {
      path: '/auctions',
      element: <App><Auctions /></App>,
    },
    {
      path: '/my-sales',
      element: <App><MySales><CreateLot /></MySales></App>,
    },
    {
      path: '/my-lots',
      element:<App><MySales><MyLots /></MySales></App> ,
    },
    {
      path: '/coordination-lots',
      element:<App><MySales><CoordinationLots /></MySales></App> ,
    },
    {
      path: '/waiting-lots',
      element:<App> <MySales><WaitingLots/></MySales></App>,
    },
    {
      path: '/sold-lots',
      element: <App><MySales><SoldLots/></MySales></App>,
    },
    {
      path: '/my-orders/',
      element: <App><MyOrders><PayWaiting /></MyOrders></App>,
    },
    {
      path: '/my-orders/peekUp',
      element:<App><MyOrders ><PeekUpLot /></MyOrders></App> ,
    },
    {
      path: '/my-orders/purchases',
      element: <App><MyOrders ><Purchases /></MyOrders></App>,
    },
    {
      path: '/my-rates',
      element: <App><MyRates /></App>,
    },
    {
      path: '/my-favourite',
      element: <App><MyFavourite /></App>,
    },
  ]
)
const queryClient=new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CustomProvider >
        <RouterProvider router={router}>
          <App/>
        </RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </CustomProvider>
    </QueryClientProvider>
  </React.StrictMode>
  </Provider>

) 
