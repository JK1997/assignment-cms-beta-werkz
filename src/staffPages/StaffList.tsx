import { AppBar, Box, Container, IconButton, Pagination, Paper, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardsDisplay from './CardsDisplay'
import TopNav from './TopNav'

export default function ButtonAppBar () {
  const [loading, setLoading] = useState(false)

  const [movieCard, setmovieCard] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(10)

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true)
      const dataFromServer = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=e11085cff59023d052e3a69484d6cd19&page=${currentPage}`
      )
      const responeFromServer = dataFromServer.data.results
      setmovieCard(responeFromServer)
      setLoading(false)
    }

    getMovieDetails()
  }, [currentPage])

  // Get currCards
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = movieCard.slice(indexOfFirstCard, indexOfLastCard)

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => { setCurrentPage(pageNumber) }

  const handleChange = (event: any, value: React.SetStateAction<number>) => {
    setCurrentPage(value)
  }

  return (
        <React.Fragment>
            <TopNav />
            <Box sx={{ backgroundColor: '#EFF8FF', minHeight: '100vh'}}>
                <Container sx={{pt:5, pb:5}}>
                    <Paper elevation={0} sx={{p:5}}>
                        <CardsDisplay movieCard={movieCard} loading={loading} />
                        <Box display="flex" justifyContent="center" mt={3}>
                            <Pagination count={10} page={currentPage} onChange={handleChange} />
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </React.Fragment>
  )
}
