import { Grid } from '@mui/material';
import React from 'react'
import {StaffCard} from './StaffCard'

interface CardsDisplayProps {
    movieCard: any[];
    loading: boolean
}

const CardsDisplay = ({movieCard, loading}: CardsDisplayProps) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <Grid container spacing={2}>
            {movieCard?.map((title: { title: any, backdrop_path: string, vote_average: string }, index: number) => (
                <Grid key={index} item xs={12} md={6}>
                    <StaffCard
                        title={title.title}
                        imageurl={'https://image.tmdb.org/t/p/w500' + title.backdrop_path}
                        body={'Rating: ' + title.vote_average}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardsDisplay
