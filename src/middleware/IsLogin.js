import React from 'react'
import { useAtom } from 'jotai'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import authStateAtom from '../store/AuthState'

function IsLogin() {
  const [authState, setAuthState] = useAtom(authStateAtom)

  // Cek User Login atau Tidak
  let isNotLogin = Object.entries(authState).length === 0

  if (isNotLogin) {
    
    toast.error('Please Login !', {
      toastId: 'id',
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });

    return <Navigate to="/login" replace/>
  } 
  
  return <Outlet/>

}

export default IsLogin