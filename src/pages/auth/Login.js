import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../../components/Copyright';


import isEmail from 'validator/lib/isEmail';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';

import authStateAtom from '../../store/AuthState'

function Login() {

  const LS_KEY_USER = process.env.REACT_APP_LS_KEY_USER
  console.log(LS_KEY_USER)
  
  const navigate = useNavigate()
  const [authState, setAuthState] = useAtom(authStateAtom)

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

    setError({
      ...error,
      [e.target.name]: ''
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newError = { ...error }

    if (!form.email) {
      newError.email = 'Email Wajib di Isi'
    } else if (!isEmail(form.email)) {
      newError.email = 'Email Tidak Valid'
    }

    if (!form.password) {
      newError.password = 'Password Wajib di isi'
    }

    return newError

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const findErrors =  validate()

    if (Object.values(findErrors).some(err => err !== '')) {
      setError(findErrors)
    } else {
      
      try {

        setIsSubmitting(true)

        await setAuthState(form)

        setTimeout(() => {
          navigate('/admin/informasi', {
            replace: true
          })
        }, 3000);

      } catch (error) {
        
        const newError = {}

        setError(newError)
        setIsSubmitting(false)

      }

    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={form.email}
            onChange={handleChange}
            helperText={error.email}
            error={error.email ? true : false}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            helperText={error.password}
            error={error.password ? true : false}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting}
          >
            {isSubmitting && <CircularProgress size="20px"/> }
            {!isSubmitting && `Sign In`}
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default Login