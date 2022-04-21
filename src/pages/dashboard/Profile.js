import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import authStateAtom from '../../store/AuthState'
import { toast } from 'react-toastify'
import axios from 'axios'

import { Box, CircularProgress } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

import { v4 as uuidv4 } from 'uuid';

function Profile() {
  const [authState, setAuthState] = useAtom(authStateAtom)
  const [isLoading, setIsLoading] = useState(false)
  const [dataProfile, setDataProfile] = useState(null)

  useEffect(() => {
    
    const getDataProfile = async () => {
      try {
      
        setIsLoading(true)

        let url = `${process.env.REACT_APP_API_ENDPOINT}/user`

        let config = {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${authState.token}`
          }
        }

        const response = await axios.get(url, config)  

        await setDataProfile(response.data.data)

        setIsLoading(false)

      } catch (error) {
        
        setIsLoading(false)

        toast.error(error.response.data?.data?.error, {
          toastId: uuidv4(),
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        });

      }
    }

    getDataProfile()

  }, [])
  
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://random.imagecdn.app/500/150"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dataProfile?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dataProfile?.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" startIcon={<EditIcon/>}>
            Edit
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Profile