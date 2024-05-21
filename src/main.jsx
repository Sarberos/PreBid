import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import CarFullProfile from './components/Main/CarList/RightColumn/SecRow/RowList/CarFullProfile/CarFullProfile.jsx'
import NotFoundPage from './utilits/NotFoundPage/NotFoundPage.jsx'




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
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
