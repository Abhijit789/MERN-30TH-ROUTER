import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './layout compoennts/Dashboard'
import Navbar from './layout compoennts/Navbar'
import Product from './layout compoennts/Product'
import { dashbordRouterPath } from './layout compoennts/routerConstants'
import axios from 'axios'
import User from './layout compoennts/User'

function AppRouter1() {
    let{dashbord,navigate,product,productId}=dashbordRouterPath;
    let router=createBrowserRouter([
        {
            path:dashbord,
            element:<Dashboard/>,
            loader:async()=>{let response=await axios.get("https://jsonplaceholder.typicode.com/users")
                let data=response.data
                console.log(data);
                
            },
            children:[
                {
                    index:true,
                    element:<Navbar/>
                },
                {
                    path:product,
                    element:<Product/>,
                    children:[
                        {
                            path:productId,
                            element:<Product/>
                        }
                    ]
                },
                {
                    path:"user",
                    element:<User/>,
                    loader:async()=>{
                        let response=await axios.get("https://jsonplaceholder.typicode.com/users/1");
                        let data=response.data;
                        console.log(data);
                        
                    }
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter1