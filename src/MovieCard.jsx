import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material'

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
                    <Chip
                    label={movie.vote_average}
                    color={movie.vote_average >= 7 ? 'success' : movie.vote_average >= 5 ? 'warning' : 'error'}
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    />
                <Typography variant='body2' color="text.secondary">
                    Released: {movie.release_date.slice(0,4)}
                </Typography>
            </CardContent>
        </Card>
    )
}
