import { Grid } from '@mui/material';
import React from 'react'
import {StaffCard} from './StaffCard'

interface CardsDisplayProps {
    staffs: any[];
    loading: boolean
}

const CardsDisplay = ({staffs, loading}: CardsDisplayProps) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <Grid container spacing={2}>
            {staffs?.map((staff: { name: string, gender: string, age: number, email: string }, index: number) => (
                <Grid key={index} item xs={12} md={6}>
                    <StaffCard
                        name={staff.name}
                        gender={staff.gender}
                        age={staff.age}
                        email={staff.email}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardsDisplay
