import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <TextField label='First Name' variant='standard'></TextField><br></br>
      <TextField label='Second Name' variant='standard'></TextField><br></br>
      <TextField label='Email' variant='standard'></TextField><br></br>
      <TextField label='Password' type='password' variant='standard'></TextField><br></br>
      <Button variant='contained' color='primary'>Sign Up</Button>
    </div>
  )
}

export default Signup

