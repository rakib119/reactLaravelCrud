import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSateContext } from '../../context/ContextProvider'

const DefaultLayout = () => {
    const {token,user} = useSateContext();
    if (!token) {
        return <Navigate to='/login' />
    }
    return (

    <div>
        DefaultLayout
        <Outlet/>
    </div>
  )
}

export default DefaultLayout
