import { Alert, Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardsDisplay from './CardsDisplay'
import TopNav from './TopNav'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import StaffsData from '../sampleData/Staffs.json'
import PaginationComponent from './PaginationComponent'

export default function ButtonAppBar () {
  const [loading, setLoading] = useState(false)
  const [staffs, setStaffs] = useState<Array<{ name: string, gender: string, age: number, email: string }>>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(10)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setLoading(true)
    try {
      const staffs = StaffsData.staffs
      setStaffs(staffs)
    } catch (error) {
      setErrorMessage("Couldn't load staff data")
    } finally {
      setLoading(false)
    }
  }, [currentPage])

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => { setCurrentPage(pageNumber) }

  return (
        <React.Fragment>
            <TopNav />
            <Box sx={{ backgroundColor: '#EFF8FF', minHeight: '100vh' }}>
                <Container sx={{ pt: 5, pb: 5 }}>
                    <Paper elevation={0} sx={{ p: 5 }}>
                        <Grid container spacing={1} mb={2}>
                            <Grid xs={12} md={3}>
                                <Typography variant="h5">Profiles</Typography>
                            </Grid>
                            <Grid xs={12} md={6}>

                            </Grid>
                            <Grid xs={12} md={3}>
                                <Button variant="contained" startIcon={<AddCircleOutlineIcon />} size="large"
                                        style={{ backgroundColor: '#628DF2' }}
                                >
                                    New Profile
                                </Button>
                            </Grid>
                        </Grid>
                        <Alert severity="error">{errorMessage}</Alert>
                        <CardsDisplay staffs={staffs} loading={loading} />
                        <Box display="flex" justifyContent="center" mt={3}>
                            <PaginationComponent cardsPerPage={cardsPerPage} totalCards={staffs.length} paginate={paginate} />
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </React.Fragment>
  )
}
