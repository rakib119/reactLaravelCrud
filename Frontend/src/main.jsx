import React from 'react'
import ReactDOM from 'react-dom/client'
import Route from './Route.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
        <RouterProvider router={Route}/>
    </ContextProvider>
  </React.StrictMode>,
)
