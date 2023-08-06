import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import ColorPalette from './ColorPalette'
import TopNav from './TopNav'
import tinycolor from 'tinycolor2';

export default function AddStaff () {
    const [selectedColor, setSelectedColor] = useState('#628DF2'); // Default color

    const handleColorChange = (color: string) => {
        setSelectedColor(color)
    }

    return(
        <React.Fragment>
            <TopNav />
            <Box sx={{ backgroundColor: tinycolor(selectedColor).lighten(30).toString(), minHeight: `calc(100vh - ${64}px)` }}>
                <Container sx={{ pt: 5, pb: 5 }}>
                    <Paper elevation={0} sx={{ p: 5 }}>
                        <Grid container spacing={1} mb={2}>
                            <Grid xs={12} md={12}>
                                <Typography variant="h5">New Profile</Typography>
                            </Grid>
                            <Grid xs={12} md={4}>

                            </Grid>
                            <Grid xs={12} md={2}>

                            </Grid>
                            <Grid xs={12} md={6}>

                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
            <ColorPalette onSelectColor={(color: string) => handleColorChange(color)} />
        </React.Fragment>
    )
}