import { Alert, Box, Button, Chip, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardsDisplay from './CardsDisplay'
import TopNav from './TopNav'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import StaffsData from '../sampleData/Staffs.json'
import PaginationComponent from './PaginationComponent'
import EmptyStaffList from './EmptyStaffList'
import NonEmptyStaffList from './NonEmptyStaffList'
import ColorPalette from './ColorPalette'
import tinycolor from 'tinycolor2';
import { useNavigate } from 'react-router-dom'

export default function StaffList () {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [staffs, setStaffs] = useState<Array<{ name: string, gender: string, age: number, email: string }>>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(10)
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedColor, setSelectedColor] = useState('#628DF2'); // Default color

  const handleColorChange = (color: string) => {
      setSelectedColor(color)
  }

  useEffect(() => {
    setLoading(true)
    try {
      /*const staffs = StaffsData.staffs
      setStaffs(staffs)*/
        const savedStaffs = JSON.parse(localStorage.getItem('staffs') || '[]')
        setStaffs(savedStaffs)
    } catch (error) {
      setErrorMessage("Couldn't load staff data")
    } finally {
      setLoading(false)
      setErrorMessage("")
    }
  }, [currentPage])

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => { setCurrentPage(pageNumber) }

  // Calculate indices for the currently displayed cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentStaffs = staffs.slice(indexOfFirstCard, indexOfLastCard);

    const goToAddStaff = () => {
      navigate('/addStaff')
    }
    
    return (
        <React.Fragment>
            <TopNav />
            <Box sx={{ backgroundColor: tinycolor(selectedColor).lighten(30).toString(), minHeight: `calc(100vh - ${64}px)` }}>
                <Container sx={{ pt: 5, pb: 5 }}>
                    <Paper elevation={0} sx={{ p: 5, minHeight:'60vh'}}>
                        <Grid container spacing={1} mb={2}>
                            <Grid xs={12} md={3}>
                                <Typography variant="h5">Profiles</Typography>
                            </Grid>
                            <Grid xs={12} md={6}>

                            </Grid>
                            <Grid xs={12} md={3}>
                                <Button variant="contained" startIcon={<AddCircleOutlineIcon />} size="large"
                                        style={{ backgroundColor: selectedColor }} onClick={()=>{goToAddStaff()}}
                                >
                                    New Profile
                                </Button>
                            </Grid>
                        </Grid>
                        {errorMessage && <Alert severity="error" sx={{mb:5}}>{errorMessage}</Alert>}
                        { staffs.length == 0 ? <EmptyStaffList/> : <NonEmptyStaffList currentStaffs={currentStaffs}
                          loading={loading} cardsPerPage={cardsPerPage} paginate={paginate} staffs={staffs} selectedColor={selectedColor}/>}
                    </Paper>
                </Container>
            </Box>
            <ColorPalette onSelectColor={(color: string) => handleColorChange(color)} />
        </React.Fragment>
  )
}
