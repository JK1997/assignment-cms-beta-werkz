import {Box, Chip, Stack } from '@mui/material'
import React from 'react'
import CardsDisplay from './CardsDisplay'
import PaginationComponent from './PaginationComponent'

interface NonEmptyStaffListProps {
    currentStaffs: any[]
    loading: boolean
    cardsPerPage: number
    paginate: (pageNumber: number) => void
    staffs: any[]
    selectedColor: string
}

const NonEmptyStaffList = ({currentStaffs, loading, cardsPerPage, paginate, staffs, selectedColor}: NonEmptyStaffListProps) => {
    return(
        <div>
            <CardsDisplay staffs={currentStaffs} loading={loading} />
            <Box display="flex" justifyContent="center" mt={3}>
                <PaginationComponent cardsPerPage={cardsPerPage} totalCards={staffs.length} paginate={paginate} />
                <Chip label={"Total "+ staffs.length} sx={{ml:2, backgroundColor:selectedColor, color:'white'}}/>
            </Box>
        </div>
    )
}

export default NonEmptyStaffList