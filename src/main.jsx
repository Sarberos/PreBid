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
import { SimpleModal } from './components/SImpleModal/SimpleModal.jsx'
import LoginModal from './components/modal_windows/LoginModal/LoginModal.jsx'
import { RoutesProtected } from './components/RoutesProtected/RoutesProtected.jsx'
import { ROUTES } from './consts/RoutesName/routesNmae.js'
import { Lots } from './components/Navigation/Lots/Lots.jsx'
import { Bidding } from './components/Navigation/Bidding/Bidding.jsx'
import { Financec } from './components/Navigation/Financec/Financec.jsx'
import { Deliveris } from './components/Navigation/Deliveris/Deliveris.jsx'
import { Statistic } from './components/Navigation/Statistic/Statistic.jsx'
import { ServicesPage } from './components/ServicesPage/ServicesPage.jsx'
import { UsersPage } from './components/UsersPage/UsersPage.jsx'
import { HowItWork } from './components/Navigation/HowItWork/HowItWork.jsx'
import { Tariffs } from './components/Navigation/Tariffs/Tariffs.jsx'

window.store=store;

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:<RoutesProtected allowedRoles={['all']}><App><Main/></App></RoutesProtected>,
      // errorElement:<NotFoundPage />,
    },
    {
      path: '/CarFullProfile/:profileId',
      element:<App><RoutesProtected allowedRoles={['all']} ><CarFullProfile/></RoutesProtected></App> ,
    },
    {
      path: '/profile',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller', 'admin']}><Profile><MyProfile/></Profile></RoutesProtected></App> ,
    },
    {
      path: '/deliveryAdress',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller', 'admin']}><Profile><DeliveryAdress/></Profile></RoutesProtected></App> ,
    },
    {
      path: '/notifications',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller', 'admin']}><Profile><NotificationSettings/></Profile></RoutesProtected></App>,
    },
    {
      path: '/support',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller', 'admin']}><Profile><Support/></Profile></RoutesProtected></App> ,
    },
    {
      path: '/tarifPlan',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller', 'admin']}><Profile><TariffPlan/></Profile></RoutesProtected></App> ,
    },
    
    {
      path: '/auctions',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller', 'admin']}><Auctions /></RoutesProtected></App>,
    },
    {
      path: '/my-sales',
      element: <App><RoutesProtected allowedRoles={['lead_generation','seller']}><MySales><CreateLot /></MySales></RoutesProtected></App>,
    },
    {
      path: '/my-lots',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller']}><MySales><MyLots /></MySales></RoutesProtected></App> ,
    },
    {
      path: '/coordination-lots',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller']}><MySales><CoordinationLots /></MySales></RoutesProtected></App> ,
    },
    {
      path: '/waiting-lots',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller']}> <MySales><WaitingLots/></MySales></RoutesProtected></App>,
    },
    {
      path: '/sold-lots',
      element:<App> <RoutesProtected allowedRoles={['lead_generation','seller']}><MySales><SoldLots/></MySales></RoutesProtected></App>,
    },
    {
      path: '/my-orders/',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller']}> <MyOrders><PayWaiting /></MyOrders></RoutesProtected></App>,
    },
    {
      path: '/my-orders/peekUp',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller']}><MyOrders ><PeekUpLot /></MyOrders></RoutesProtected></App> ,
    },
    {
      path: '/my-orders/purchases',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller']}> <MyOrders ><Purchases /></MyOrders></RoutesProtected></App>,
    },
    {
      path: '/my-rates',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller']}> <MyRates /></RoutesProtected></App>,
    },
    {
      path: '/my-favourite',
      element:<App><RoutesProtected allowedRoles={['lead_generation','seller']}> <MyFavourite /></RoutesProtected></App>,
    },
    {
      path: ROUTES.LOTS,
      element:<App><RoutesProtected allowedRoles={['admin']}> <Lots /></RoutesProtected></App>
    },
    {
      path: ROUTES.BIDDING,
      element: <App><RoutesProtected allowedRoles={['admin']}><Bidding /></RoutesProtected></App>
    },
    {
      path: ROUTES.FINANCEC,
      element:   <App><RoutesProtected allowedRoles={['admin']}><Financec /></RoutesProtected></App>
    },
    {
      path: ROUTES.DELIVERIS,
      element:   <App><RoutesProtected allowedRoles={['admin']}><Deliveris /></RoutesProtected></App>
    },
    {
      path: ROUTES.STATISTIC,
      element:   <App><RoutesProtected allowedRoles={['admin']}><Statistic /></RoutesProtected></App>
    },
    {
      path: ROUTES.SERVICES,
      element:   <App><RoutesProtected allowedRoles={['admin']}><ServicesPage /></RoutesProtected></App>
    },
    {
      path: ROUTES.USERS,
      element:   <App><RoutesProtected allowedRoles={['admin']}><UsersPage /></RoutesProtected></App>
    },
    {
      path: ROUTES.HOWITWORK,
      element:   <App><RoutesProtected allowedRoles={['all']}><HowItWork /></RoutesProtected></App>
    },
    {
      path: ROUTES.TARIFFS,
      element:   <App><RoutesProtected allowedRoles={['all']}><Tariffs /></RoutesProtected></App>
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
