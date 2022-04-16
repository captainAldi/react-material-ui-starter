import React from 'react'
import { useAtom } from 'jotai'
import authStateAtom from '../store/AuthState'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

function CheckAuth() {
  const [authState, setAuthState] = useAtom(authStateAtom)

  // Cek User Login atau Tidak
  if (Object.entries(authState).length === 0) {
    
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

export default CheckAuth