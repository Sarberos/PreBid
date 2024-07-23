import { useSelector } from 'react-redux'
import NotFoundPage from '../../utilits/NotFoundPage/NotFoundPage'
import s from './RoutesProtected.module.css'
import { useEffect } from 'react'

export const RoutesProtected=({allowedRoles=[], children})=>{
    const currentRole = useSelector(state => state.user.userRole)
    
    return allowedRoles.includes(currentRole) || allowedRoles.includes('all') ? children : <NotFoundPage />

}