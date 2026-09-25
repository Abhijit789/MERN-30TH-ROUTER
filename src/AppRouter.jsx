import React from 'react'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import PageNotFound from './components/page not found/PageNotFound'

function AppRouter() {
    // let id=useParams()
    let router=createBrowserRouter([
        {
            path:'/',
            element:<h1>Welcome To Dashbord</h1>
        },
        {
            path:"/product",
            element:<h3>Welcome to product page</h3>
        },{
            path:"/user",
            element:<h3>Welcome to user page</h3>
        },
        {
            path:"/product/:id",
            element:<h3>Product 1</h3>
        },{
            path:"*",
            element:<PageNotFound/>
        }
    ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default AppRouter