import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Index, {loader as indexLoader} from './pages/Index'
import About from './pages/About'
import NewPost from './pages/NewPost'
import Error from './pages/Error'
import UpdatePost, {loader as updatePostLoader}from './pages/UpdatePost'
import { CssBaseline } from '@mui/material'
import './assets/styles/index.css'

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
      },
      {
        path: '/posts/:id/edit',
        element: <UpdatePost />,
        loader: updatePostLoader
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
