import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function MovieCard({ movie }){

    return(
        <Card sx={{height:'100%'}}>
            <CardMedia
            component="img"
            image={movie.poster}
            alt={movie.title}
            height={300}
            />
            <CardContent>
                <Typography variant='h5'>
                    {movie.title}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    Rating: {movie.rating}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    Year: {movie.year}
                </Typography>
            </CardContent>
        </Card>
    )
}
