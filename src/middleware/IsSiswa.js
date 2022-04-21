import React from 'react'
import { useAtom } from 'jotai'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import authStateAtom from '../store/AuthState'

function IsSiswa() {
  const [authState, setAuthState] = useAtom(authStateAtom)
  
  // Cek User Siswa atau Tidak
  let isSiswa = authState.role == 'siswa'

  if (!isSiswa) {
    
    toast.error('Not Siswa !', {
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

export default IsSiswa