import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Index, {loader as indexLoader} from './pages/Index'
import About from './pages/About'
import NewPost from './pages/NewPost'
import { CssBaseline } from '@mui/material'
import './assets/styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/posts/create',
        element: <NewPost />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
