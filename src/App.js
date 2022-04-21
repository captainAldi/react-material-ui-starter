import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './pages/auth/Login';

import Dashboard from './layout/Dashboard';
import HomeAwal from './pages/Home'
import Profile from './pages/dashboard/Profile';

import InformasiAdmin from './pages/dashboard/admin/Informasi';
import PendaftarAdmin from './pages/dashboard/admin/Pendaftar';

import InformasiSiswa from './pages/dashboard/siswa/Informasi';


import { ThemeProvider } from '@mui/material/styles';
import { AppThemeContext } from './contexts/AppThemeContext'
import { CssBaseline } from '@mui/material';


import IsLogin from './middleware/IsLogin';
import IsAdmin from './middleware/IsAdmin';
import IsSiswa from './middleware/IsSiswa';

function App() {
  const themeContext = useContext(AppThemeContext)

  return (
    <>
      <ThemeProvider theme={themeContext.theme}>
        <CssBaseline/>

        <ToastContainer />
      
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<HomeAwal/>} />
            
            <Route path='/login' element={<LoginPage/>} />

            <Route element={<IsLogin />}>

              <Route element={<IsAdmin />}>
                <Route element={<Dashboard/>} >
                  <Route path='/admin/informasi' element={<InformasiAdmin/>} /> 
                  <Route path='/admin/pendaftar' element={<PendaftarAdmin/>}/>
                  <Route path='/admin/profile' element={<Profile/>}/>
                </Route>
              </Route>

              <Route element={<IsSiswa />}>
                <Route element={<Dashboard/>} >
                  <Route path='/siswa/informasi' element={<InformasiSiswa/>} /> 
                  <Route path='/siswa/profile' element={<Profile/>}/>
                </Route>
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
