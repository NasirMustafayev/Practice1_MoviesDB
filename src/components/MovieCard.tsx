import { memo } from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material'
import { Link } from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';

interface MovieCardPropTypes{
     movie : {
        id: number;
        title: string;
        poster_path: string;
        vote_average: number;
        release_date: string
    }
}

function MovieCard({ movie} : MovieCardPropTypes){

//if you don't use React.memo for this function, it will rendered again and again when parent state change.
// Thats means in every theme switch
//console.log('RENDER')
    return(
        <Link to={`/movie/${movie.id}`}>
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
                    label=<><StarIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {movie.vote_average.toFixed(1)}</>
                    color={movie.vote_average >= 7 ? 'success' : movie.vote_average >= 5 ? 'warning' : 'error'}
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    /> | 
                    <CalendarMonthIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                     {movie.release_date.slice(0,4)}
            </CardContent>
        </Card>
        </Link>
    )
}

export default memo(MovieCard)
