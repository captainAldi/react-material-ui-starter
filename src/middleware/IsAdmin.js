import React from 'react'
import { useAtom } from 'jotai'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import authStateAtom from '../store/AuthState'

function IsAdmin() {
  const [authState, setAuthState] = useAtom(authStateAtom)
  
  // Cek User Admin atau Tidak
  let isAdmin = authState.role == 'admin'

  if (!isAdmin) {
    
    toast.error('Not Admin !', {
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

    return <Navigate to="/" replace/>

  } 
  
  return <Outlet/>

}

export default IsAdmin