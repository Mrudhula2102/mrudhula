import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h1> Welcome to React </h1>
      <TextField label='Email' variant='standard'></TextField><br></br>
      <TextField label='Password' variant='standard' type='password'></TextField><br></br>
      <Button variant='contained' color='primary'>Login</Button>
    </div>
  )
}

export default Login
