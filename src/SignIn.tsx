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
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const defaultTheme = createTheme()

export default function SignIn () {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const goToStaffList = () => {
    navigate(`/staffList?username=${username}`)
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
                    <Typography component="h1" variant="h4" sx={{ fontWeight: 800 }}>
                        Login
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Welcome back!
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <form>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoFocus
                                value={username}
                                onChange = {(e) => { setUsername(e.target.value) }}
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
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => { goToStaffList() }}
                            >
                                Login
                            </Button>
                        </form>
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
                <Typography sx={{
                  position: 'absolute',
                  top: 20,
                  left: 50,
                  fontFamily: 'Nunito',
                  fontSize: '12px',
                  zIndex: 100
                }}>16:10:23</Typography>
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
