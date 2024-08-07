import { useSelector } from 'react-redux'
import NotFoundPage from '../../utilits/NotFoundPage/NotFoundPage'
import s from './RoutesProtected.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export const RoutesProtected=({allowedRoles=[], children,openRegistration,openLogin,userInfRefetching,userInf})=>{
    const currentRole = useSelector(state => state.user.userRole);

    return allowedRoles.includes(currentRole) || allowedRoles.includes('all') ? children : <NotFoundPage />

}