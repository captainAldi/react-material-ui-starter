import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';

function Home() {
  return (
    <>
      <div> Home Awal</div>

      <Button
        variant="outlined"
        component={Link}
        to="/admin/informasi"
      >
        Admin
      </Button>

      <Button
        variant="outlined"
        component={Link}
        to="/siswa/informasi"
      >
        Siswa
      </Button>
    </>
  )
}

export default Home