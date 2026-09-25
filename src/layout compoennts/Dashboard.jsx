import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
     <h2>Dashbord Main Layout</h2>
      <Outlet/>
    </>
  )
}

export default Dashboard