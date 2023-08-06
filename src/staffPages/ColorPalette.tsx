import { Fab, Menu, MenuItem } from '@mui/material'
import React from 'react'
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined'
import CircleIcon from '@mui/icons-material/Circle'

interface ColorPaletteProps {
  onSelectColor: (color: string) => void
}

export default function ColorPalette ({ onSelectColor }: ColorPaletteProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
        <div
            style={{
              position: 'fixed',
              bottom: '40px',
              right: '40px',
              zIndex: '1000'
            }}
        >
            <Fab aria-label="add"
                 sx={{ backgroundColor: 'white' }}
                 id="demo-positioned-button"
                 aria-controls={open ? 'demo-positioned-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick}
            >
                <PaletteOutlinedIcon />
            </Fab>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
            >
                <MenuItem onClick={() => { onSelectColor('#EF8543'); handleClose() }}><CircleIcon fontSize={'large'} sx={{ color: '#EF8543' }}/></MenuItem>
                <MenuItem onClick={() => { onSelectColor('#628DF2'); handleClose() }}><CircleIcon fontSize={'large'} sx={{ color: '#628DF2' }}/></MenuItem>
            </Menu>
        </div>
  )
}
