import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Tooltip, useMediaQuery, useTheme } from '@mui/material'

interface TopNavProps {
  username: string
}

const TopNav = ({ username }: TopNavProps) => {
  const theme = useTheme()
  const isSmBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigate = useNavigate()

  const Logout = () => {
    navigate('/')
  }

  return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Tooltip title="Back To Previous">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => { navigate(-1) }}
                        >
                            <FontAwesomeIcon icon={faCircleArrowLeft} size="sm" style={{ color: 'black' }}/>
                        </IconButton>
                    </Tooltip>
                    <Typography sx={{ color: '#272727', marginLeft: isSmBreakpoint ? 0 : 'auto', paddingLeft: isSmBreakpoint ? 5 : '' }}>{username !== 'null' && username}</Typography>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle style={{ color: 'grey' }} fontSize="large" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right'
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={Logout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
  )
}
export default TopNav
