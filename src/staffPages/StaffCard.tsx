import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import { Typography } from '@mui/material';

interface CardProps {
  title: string
  imageurl: string
  body: string
}

export function StaffCard ({ title, imageurl, body }: CardProps) {
  return (
    <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
            width: 320,
            '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}
    >
        <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img
                src={imageurl}
                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                loading="lazy"
                alt=""
            />
        </AspectRatio>
        <CardContent>
            <Typography>
                {title}
            </Typography>
            <Typography mb={1}>
                {body}
            </Typography>
        </CardContent>
    </Card>
  )
}
