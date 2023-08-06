import {Alert, Box, Button, Container, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import React, {useEffect, useState } from 'react'
import ColorPalette from './ColorPalette'
import TopNav from './TopNav'
import tinycolor from 'tinycolor2';
import { useForm, SubmitHandler  } from 'react-hook-form';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useNavigate, useParams } from 'react-router-dom';


export default function EditStaff () {
    const navigate = useNavigate()
    const {id} = useParams<{id: string}>()
    const [selectedColor, setSelectedColor] = useState('#628DF2'); // Default color
    const [successMsg, setSuccessMsg] = useState("");
    const [staffs, setStaffs] = useState<Array<{ id: number, name: string, gender: string, age: number, email: string }>>([])
    const [staffData, setStaffData] = useState({
        name: '',
        gender: '',
        age: 0,
        email: ''
    });

    const handleColorChange = (color: string) => {
        setSelectedColor(color)
    }

    interface FormData {
        name: string
        gender: string
        age: number
        email: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset
    } = useForm<FormData>();


    const onSubmit: SubmitHandler<FormData> = (data) => {
        const updatedStaffs = staffs.map((staff) =>
            staff.id === (id ? parseInt(id, 10) : NaN) ? { ...staff, ...data } : staff
        );

        localStorage.setItem('staffs', JSON.stringify(updatedStaffs));
        setSuccessMsg("Staff profile updated  successfully.")
        reset()
        setTimeout(() => {
            navigate('/staffList')
        }, 2000)
    };

    useEffect(() => {
        // Fetch staff data from localStorage based on the ID
        if(id){
            const fetchStaffData = () => {
                const savedStaffs = JSON.parse(localStorage.getItem('staffs') || '[]');
                const selectedStaff = savedStaffs.find((staff: { id: number; }) => staff.id === parseInt(id, 10));

                if (selectedStaff) {
                    setStaffData(selectedStaff);
                }
            };

            fetchStaffData();
        }
    }, [id, setValue]);

    useEffect(() => {
        reset(staffData);
    }, [staffData, reset]);

    useEffect(() => {
        const savedStaffs = JSON.parse(localStorage.getItem('staffs') || '[]');
        setStaffs(savedStaffs);
    }, []);

    return(
        <React.Fragment>
            <TopNav />
            <Box sx={{ backgroundColor: tinycolor(selectedColor).lighten(30).toString(), minHeight: `calc(100vh - ${64}px)` }}>
                <Container sx={{ pt: 5, pb: 5 }}>
                    <Paper elevation={0} sx={{ p: 5, minHeight:'60vh'}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {successMsg && <Alert severity="success" sx={{mb:3}}>{successMsg}</Alert>}
                            <Grid container spacing={2} mb={2}>
                                <Grid xs={12} md={12} mb={5}>
                                    <Typography variant="h5">Edit Profile</Typography>
                                </Grid>
                                <Grid xs={12} md={4} mb={3}>
                                    <div className="form-control">
                                        <TextField
                                            label="Name *"
                                            type="text"
                                            sx={{ width: '90%' }}
                                            InputLabelProps={{ shrink: true }}
                                            {...register("name", {
                                                required: "Name is required."
                                            })}
                                            inputProps={{ maxLength: 20 }}
                                            error={!!errors.name}
                                            helperText={errors.name && "Name is required"}
                                            defaultValue={staffData.name}
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={2} mb={3}>
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
                                            defaultValue={staffData.age}
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
                                            InputLabelProps={{ shrink: true }}
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
                                            defaultValue={staffData.email}
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
                                            value={staffData.gender || 'Male'}
                                            onChange={(e) => setValue('gender', e.target.value)}
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
                                            Save Changes 
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