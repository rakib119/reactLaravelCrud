import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSateContext } from '../../context/ContextProvider'

const GuestLayout = () => {
    const {token} = useSateContext();
    // debugger;
    if (token) {
        return <Navigate to='/'/>

    }
  return (
    <div>
        GuestLayout
        <Outlet/>
    </div>
  )
}

export default GuestLayout
