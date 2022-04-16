import React from 'react'
import { Typography } from '@mui/material'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      Your Website
      <br/>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright