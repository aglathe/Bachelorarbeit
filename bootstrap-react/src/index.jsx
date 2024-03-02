import React from 'react'
import ReactDOM from 'react-dom/client'



import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import App from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Warenkorb from './pages/Warenkorb.jsx'

import './index.css'
import './custom.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'shop',
        element: <Shop />
    },
    {
        path: 'warenkorb',
        element: <Warenkorb />
    }
])



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
