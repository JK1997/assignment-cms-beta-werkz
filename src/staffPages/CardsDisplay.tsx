import { Grid } from '@mui/material'
import React from 'react'
import { StaffCard } from './StaffCard'

interface CardsDisplayProps {
  staffs: any[]
  loading: boolean
  username: string
}

const CardsDisplay = ({ staffs, loading, username }: CardsDisplayProps) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
        <Grid container spacing={2}>
            {staffs?.map((staff: { id: number, name: string, gender: string, age: number, email: string }, index: number) => (
                <Grid key={index} item xs={12} md={6}>
                    <StaffCard
                        id={staff.id}
                        name={staff.name}
                        gender={staff.gender}
                        age={staff.age}
                        email={staff.email}
                        username={username}
                    />
                </Grid>
            ))}
        </Grid>
  )
}

export default CardsDisplay
