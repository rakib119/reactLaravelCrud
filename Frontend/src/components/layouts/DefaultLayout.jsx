import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useSateContext } from '../../context/ContextProvider'

const DefaultLayout = () => {
    const {token,user} = useSateContext();
    if (!token) {
        return <Navigate to='/login' />
    }
    const onLogout = (ev) =>{
        ev.preventDefault();
    }
    return (
        <div id="defaultLayout">
            {/* sideBar */}
            <aside>
                <Link to="dashboard"> Dashboard</Link>
                <Link to="users">Users</Link>
            </aside>
            <div className="content">
                {/* Header */}
                <header>
                    <div>Header</div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLogout} className='btn-logout'>Logout</a>
                    </div>
                </header>
                {/* Main Content */}
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
  )
}

export default DefaultLayout
