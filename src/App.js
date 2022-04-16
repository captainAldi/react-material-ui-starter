import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DashboardAdmin from './layout/Dashboard';
import InformasiAdmin from './pages/dashboard/admin/Informasi';
import PendaftarAdmin from './pages/dashboard/admin/Pendaftar';
import HomeAwal from './pages/Home'
import LoginPage from './pages/auth/Login';
import CheckAuth from './helpers/CheckAuth'

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { AppThemeContext } from './contexts/AppThemeContext'

function App() {
  const themeContext = useContext(AppThemeContext)

  return (
    <>

      <ThemeProvider theme={themeContext.theme}>
        <ToastContainer />
      
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<HomeAwal/>} />
            <Route path='/login' element={<LoginPage/>} />

            <Route element={<CheckAuth/>}>
              <Route element={<DashboardAdmin/>} >
                <Route path='/admin/informasi' element={<InformasiAdmin/>} /> 
                <Route path='/admin/pendaftar' element={<PendaftarAdmin/>}/>
              </Route>
            </Route>

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />

          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </>
  );
}

export default App;
