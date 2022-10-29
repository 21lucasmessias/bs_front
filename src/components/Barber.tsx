import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rashide from '../assets/image/foto2.png';

export default function CardBarber() {
    return (
        <Card
            sx={{
                display: 'grid',
                width: 172,
                height: 148,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CardActionArea>
                <CardMedia
                    sx={{ width: 109, height: 105.16, margin: 0, borderRadius: 7 }}
                    component="img"
                    image={Rashide}
                    alt="name"
                />

                <Typography
                    sx={{ display: 'flex', width: 110, height: 27, margin: 0, justifyContent: 'center' }}
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    Name
                </Typography>
            </CardActionArea>
        </Card>
    );
}
