import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import bgImage1 from './images/bg-1.svg'
import bgImage2 from './images/bg-2.svg'
import { Link, useNavigate } from 'react-router-dom'

const defaultTheme = createTheme()

export default function SignIn () {
  const navigate = useNavigate()

  const goToStaffList = () => {
    navigate('/staffList')
  }

  return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <CssBaseline />
                <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      zIndex: 999
                    }}
                >
                    <Typography component="h1" variant="h4">
                        Login
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Welcome back!
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => { goToStaffList() }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
                <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '40%',
                      height: '40%',
                      backgroundImage: `url(${bgImage1})`,
                      backgroundSize: 'cover',
                      zIndex: 0
                    }}
                />
                {/* Bottom right background image */}
                <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: '40%',
                      height: '35%',
                      backgroundImage: `url(${bgImage2})`,
                      backgroundSize: 'cover',
                      zIndex: 0
                    }}
                />
            </Container>
        </ThemeProvider>
  )
}
