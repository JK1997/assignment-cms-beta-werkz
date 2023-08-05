import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface PaginationProps {
  cardsPerPage: number
  totalCards: number
  paginate: (pageNumber: number) => void
}

const PaginationComponent = ({ cardsPerPage, totalCards, paginate }: PaginationProps) => {
  const pageCount = Math.ceil(totalCards / cardsPerPage)

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    paginate(page)
  }

  return (
      <Stack spacing={2} direction="row" justifyContent="center">
          <Pagination count={pageCount} variant="outlined" color="primary" onChange={handleChange} />
      </Stack>
  )
}

export default PaginationComponent
