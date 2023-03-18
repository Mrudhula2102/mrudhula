import { AppBar, Button, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         </IconButton>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{color:'white'}}>Facebook</Link>
          </Typography>
          <Button color="inherit"><Link to='/login' style={{color:'white'}}>Login</Link></Button>
          <Button color="inherit"><Link to='/signup' style={{color:'white'}}>Sign Up</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
 

    </div>
  )
}

export default Navbar
