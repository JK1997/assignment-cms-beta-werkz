import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import {Grid, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface CardProps {
  name: string
  gender: string
  age: number
  email: string
}

export function StaffCard ({ name, gender, age, email }: CardProps) {
  return (
    <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
            width: 414,
            height: 120,
            '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}
    >
        <AspectRatio ratio="1" sx={{ width: 80}}>
            <AccountCircle style={{ color: '#F2F2F2', backgroundColor: '#FCFCFD' }} fontSize="large" />
        </AspectRatio>
        <CardContent>
            <Grid container spacing={2} p={2}>
                <Grid xs={12} md={4}>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: 'Nunito',
                        color: '#707070',
                        opacity: 0.6
                    }}>
                        Name
                    </Typography>
                    <Typography sx={{
                        fontSize: '16px',
                        fontFamily: 'Nunito',
                        color: '#272727',
                        opacity: 1
                    }}>
                        {name}
                    </Typography>
                </Grid>
                <Grid xs={12} md={2}>
                </Grid>
                <Grid xs={12} md={3}>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: 'Nunito',
                        color: '#707070',
                        opacity: 0.6
                    }}>
                        Gender
                    </Typography>
                    <Typography sx={{
                        fontSize: '16px',
                        fontFamily: 'Nunito',
                        color: '#272727',
                        opacity: 1
                    }}>
                        {gender}
                    </Typography>
                </Grid>
                <Grid xs={12} md={3}>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: 'Nunito',
                        color: '#707070',
                        opacity: 0.6
                    }}>
                        Age
                    </Typography>
                    <Typography sx={{
                        fontSize: '16px',
                        fontFamily: 'Nunito',
                        color: '#272727',
                        opacity: 1
                    }}>
                        {age}
                    </Typography>
                </Grid>
                <Grid xs={12} md={12} mt={2}>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: 'Nunito',
                        color: '#707070',
                        opacity: 0.6
                    }}>
                        Email
                    </Typography>
                    <Typography sx={{
                        fontSize: '16px',
                        fontFamily: 'Nunito',
                        color: '#272727',
                        opacity: 1
                    }}>
                        {email}
                    </Typography>
                </Grid>
            </Grid>

        </CardContent>
    </Card>
  )
}
