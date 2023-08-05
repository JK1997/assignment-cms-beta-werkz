import {Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import EmptyStateImage from '../images/empty-state.svg'

export default function EmptyStaffList(){
    return(
        <Stack spacing={2} justifyContent="center" alignItems="center" my={15}>
            <img src={EmptyStateImage} />
            <Typography variant="h4" gutterBottom>
                No Profiles Yet
            </Typography>
            <Typography variant="h5" gutterBottom alignItems="center">
                Click on the button at the top right
                to create a new profile.
            </Typography>
        </Stack>
    )
}