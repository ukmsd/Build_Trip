import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'


const Accessremove = () => {
  return (
    sessionStorage.getItem("Access")?.length>0? <Navigate to='/home2'/>:<Outlet/>
  )
}

export default Accessremove
