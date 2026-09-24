import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <div className="fluid-container">
        <div className="row">
            <div className="col">
            <nav className='navbar navbar-expand bg-warning'>
                    <p className='fw-bold mx-2 my-2'>
                        <Link to={'/'} className='text-decoration-none text-white'>
                          <i className='fa-solid fa-phone text-primary me-2'></i>Contact <span className='text-primary'>Manager</span>
                        </Link>
                    </p>
                </nav>
            </div>
        </div>

    </div>
    
        <Outlet/>
    </>
  )
}

export default Navbar