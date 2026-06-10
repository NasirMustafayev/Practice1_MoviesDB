import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function MovieCard({ movie }){

    return(
        <Card sx={{height:'100%'}}>
            <CardMedia
            component="img"
            image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            alt={movie.title}
            height={300}
            sx={{ objectFit: 'cover', objectPosition: 'top'}}
            />
            <CardContent>
                <Typography variant='h5'>
                    {movie.title}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    Rating: {movie.vote_average}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    Year: {movie.release_date}
                </Typography>
            </CardContent>
        </Card>
    )
}
