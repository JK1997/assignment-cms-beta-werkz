import { Alert, Box, Button, Container, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ColorPalette from './ColorPalette'
import TopNav from './TopNav'
import tinycolor from 'tinycolor2'
import { useForm, type SubmitHandler } from 'react-hook-form'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useLocation, useNavigate } from 'react-router-dom'

export default function AddStaff () {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedColor, setSelectedColor] = useState('#628DF2') // Default color
  const [successMsg, setSuccessMsg] = useState('')
  const [staffs, setStaffs] = useState<Array<{ id: number, name: string, gender: string, age: number, email: string }>>([])
  const totalStaffs = location.state?.totalStaffs || 0
  const username = location.state?.username || ''

  const handleColorChange = (color: string) => {
    setSelectedColor(color)
  }

  const newUserId = () => {
    return totalStaffs + 1
  }

  interface FormData {
    id: number
    name: string
    gender: string
    age: number
    email: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newId = newUserId()
    const newStaff = { ...data, id: newId }

    setStaffs((prevStaffs) => [...prevStaffs, newStaff])

    const existingStaffs = JSON.parse(localStorage.getItem('staffs') || '[]')
    const updatedStaffs = [...existingStaffs, newStaff]
    localStorage.setItem('staffs', JSON.stringify(updatedStaffs))

    setSuccessMsg('Staff is created successfully.')
    reset()

    setTimeout(() => {
      navigate('/staffList')
    }, 2000)
  }

  useEffect(() => {
    console.log(staffs)
  }, [staffs])

  return (
        <React.Fragment>
            <TopNav username={username}/>
            <Box sx={{ backgroundColor: tinycolor(selectedColor).lighten(30).toString(), minHeight: `calc(100vh - ${64}px)` }}>
                <Container sx={{ pt: 5, pb: 5 }}>
                    <Paper elevation={0} sx={{ p: 5, minHeight: '60vh' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {successMsg && <Alert severity="success" sx={{ mb: 3 }}>{successMsg}</Alert>}
                            <Grid container spacing={2} mb={2}>
                                    <Grid xs={12} md={12} mb={5}>
                                        <Typography variant="h5">New Profile</Typography>
                                    </Grid>
                                    <Grid xs={12} md={4} mb={3}>
                                        <div className="form-control">
                                            <TextField
                                                label="Name *"
                                                type="text"
                                                sx={{ width: '90%' }}
                                                {...register('name', {
                                                  required: 'Name is required.'
                                                })}
                                                inputProps={{ maxLength: 20 }}
                                                error={!(errors.name == null)}
                                                helperText={(errors.name != null) && 'Name is required'}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid xs={12} md={2} mb={3}>
                                        <div className="form-control">
                                            <TextField
                                                label="Age *"
                                                type="number"
                                                sx={{ width: '90%' }}
                                                {...register('age', {
                                                  required: 'Age is required.'
                                                })}
                                                InputProps={{ inputProps: { min: 13, max: 99 } }}
                                                error={!(errors.age == null)}
                                                helperText={(errors.age != null) && 'Age is required' }
                                            />
                                        </div>
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                    </Grid>
                                <Grid xs={12} md={4} mb={4}>
                                    <div className="form-control">
                                        <TextField
                                            label="Email *"
                                            type="email"
                                            sx={{ width: '90%' }}
                                            {...register('email', {
                                              required: 'Email is required.',
                                              pattern: {
                                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                message: 'Email is not valid.'
                                              }
                                            })}
                                            inputProps={{ maxLength: 30 }}
                                            error={!(errors.email == null)}
                                            helperText={(errors.email != null) && errors.email.message}
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={2} mb={3}>
                                    <div className="form-control">
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Gender *"
                                            sx={{ width: '90%' }}
                                            {...register('gender', {
                                              required: 'Gender is required.'
                                            })}
                                            error={!(errors.gender == null)}
                                            helperText={(errors.gender != null) && 'Gender is required' }
                                        >
                                            <MenuItem value="Male">
                                                Male
                                            </MenuItem>
                                            <MenuItem value="Female">
                                                Female
                                            </MenuItem>
                                            <MenuItem value="Prefer not to say">
                                                Prefer not to say
                                            </MenuItem>
                                        </TextField>
                                    </div>
                                </Grid>
                                <Grid xs={12} md={6}>
                                </Grid>
                                <Grid xs={12} md={12}>
                                    <div className="form-control">
                                        <Button type="submit" variant="contained" startIcon={<AddCircleOutlineIcon />} size="large"
                                                style={{ backgroundColor: selectedColor }}
                                        >
                                            Create Profile
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Container>
            </Box>
            <ColorPalette onSelectColor={(color: string) => { handleColorChange(color) }} />
        </React.Fragment>
  )
}
