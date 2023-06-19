import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Index, {loader as indexLoader} from './pages/Index'
import About from './pages/About'
import NewPost from './pages/NewPost'
import { CssBaseline } from '@mui/material'
import './assets/styles/index.css'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />, // Doesn't get the Layout styles
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader,
        errorElement: <Error />
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
