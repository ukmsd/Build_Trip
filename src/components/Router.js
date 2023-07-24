import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const Privaterouter = () => {
  return (
    
    sessionStorage.getItem("Access")?.length>0? <Outlet/>:<Navigate to='/login'/>
    
  )
}
export default Privaterouter
