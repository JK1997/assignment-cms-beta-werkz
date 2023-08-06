import { Box, Button, Container, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import ColorPalette from './ColorPalette'
import TopNav from './TopNav'
import tinycolor from 'tinycolor2';
import { useForm, SubmitHandler } from 'react-hook-form';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'


export default function AddStaff () {
    const [selectedColor, setSelectedColor] = useState('#628DF2'); // Default color

    const handleColorChange = (color: string) => {
        setSelectedColor(color)
    }

    interface FormData {
        name: string
        age: number
        email: string
        gender: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();


    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return(
        <React.Fragment>
            <TopNav />
            <Box sx={{ backgroundColor: tinycolor(selectedColor).lighten(30).toString(), minHeight: `calc(100vh - ${64}px)` }}>
                <Container sx={{ pt: 5, pb: 5 }}>
                    <Paper elevation={0} sx={{ p: 5, minHeight:'60vh'}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} mb={2}>
                                    <Grid xs={12} md={12} mb={2}>
                                        <Typography variant="h5">New Profile</Typography>
                                    </Grid>
                                    <Grid xs={12} md={4} mb={2}>
                                        <div className="form-control">
                                            <TextField
                                                label="Name *"
                                                type="text"
                                                sx={{ width: '90%' }}
                                                {...register("name", {
                                                    required: "Name is required."
                                                })}
                                                inputProps={{ maxLength: 20 }}
                                                error={!!errors.name}
                                                helperText={errors.name && "Name is required"}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid xs={12} md={2} mb={2}>
                                        <div className="form-control">
                                            <TextField
                                                label="Age *"
                                                type="number"
                                                sx={{ width: '90%' }}
                                                {...register("age", {
                                                    required: "Age is required."
                                                })}
                                                InputProps={{ inputProps: { min: 13, max: 99 } }}
                                                error={!!errors.age}
                                                helperText={errors.age && "Age is required" }
                                            />
                                        </div>
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                    </Grid>
                                <Grid xs={12} md={4} mb={2}>
                                    <div className="form-control">
                                        <TextField
                                            label="Email *"
                                            type="email"
                                            sx={{ width: '90%' }}
                                            {...register("email", {
                                                required: "Email is required.",
                                                pattern: {
                                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                    message: "Email is not valid."
                                                }
                                            })}
                                            inputProps={{ maxLength: 30 }}
                                            error={!!errors.email}
                                            helperText={errors.email && errors.email.message}
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={2} mb={2}>
                                    <div className="form-control">
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Gender *"
                                            sx={{ width: '90%' }}
                                            {...register("gender", {
                                                required: "Gender is required."
                                            })}
                                            error={!!errors.gender}
                                            helperText={errors.gender && "Gender is required" }
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
            <ColorPalette onSelectColor={(color: string) => handleColorChange(color)} />
        </React.Fragment>
    )
}