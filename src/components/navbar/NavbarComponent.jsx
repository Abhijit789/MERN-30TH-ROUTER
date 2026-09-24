import React from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import './navbar.css'

function NavbarComponent() {
    
    
  return (
    <>
     <div className="fluid-container">
        <div className="row">
            <div className="col">
                <nav className='navbar navbar-expand bg-dark p-3'>
                      <ul className='ms-1 my-1'>
                        <li className='d-inline-block px-2 py-3 bg-primary mx-1 rounded'><Link className='text-decoration-none text-light p-2' to={'/'}>Home</Link></li>
                        <li className='d-inline-block px-2 py-3 bg-primary mx-1 rounded'><Link className='text-decoration-none text-light p-2' to={'/addcontact'}>Contact</Link></li>
                        <li className='d-inline-block px-2 py-3 bg-primary mx-1 rounded'><Link className='text-decoration-none text-light p-2' to={'/viewcontact/:1'}>View Contact</Link></li>
                     </ul>
                     
                </nav>
            </div>
        </div>

        <div className="row my-2">
            <div className="col">
                <nav className='navbar navbar-expand bg-dark p-3'>
                      <ul className='ms-1 my-1'>
                        <li className='d-inline-block px-2 py-3 bg-secondary mx-1 rounded'><NavLink className={({isActive})=>`${isActive?"active":"inactive"} text-decoration-none text-light p-2`} to={'/'}>Home</NavLink></li>
                        <li className='d-inline-block px-2 py-3 bg-secondary mx-1 rounded'><NavLink className={({isActive})=>`${isActive?"active":"inactive"} text-decoration-none text-light p-2`} to={'/addcontact'}>Contact</NavLink></li>
                        <li className='d-inline-block px-2 py-3 bg-secondary mx-1 rounded'><NavLink className={({isActive})=>`${isActive?"active":"inactive"} text-decoration-none text-light p-2`} to={'/viewcontact/:1'}>View Contact</NavLink></li>
                     </ul>
                     
                </nav>
            </div>
        </div>
        
        
     </div>
     <Outlet/>
    </>
  )
}

export default NavbarComponent