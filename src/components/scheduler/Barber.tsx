import Card from '@mui/material/Card';

import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import { BarberData } from '../../utils/BarberUtils';

export default function CardBarber() {
    return (
        <Box display="grid" gridTemplateColumns="repeat(2,0.1fr)" gap={2}>
            {BarberData.map(({ name, image }) => {
                return (
                    <Card
                        sx={{
                            width: 172,
                            height: 148,
                            justifyContent: 'center',
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={image}
                                alt={name}
                                sx={{
                                    justifyContent: 'center',
                                    width: 109,
                                    height: 105.16,
                                    margin: 'auto',
                                    padding: 0,
                                    borderRadius: 7,
                                }}
                            />

                            <Typography
                                sx={{
                                    display: 'flex',

                                    margin: 0,
                                    justifyContent: 'center',
                                }}
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {name}
                            </Typography>
                        </CardActionArea>
                    </Card>
                );
            })}
        </Box>
    );
}
