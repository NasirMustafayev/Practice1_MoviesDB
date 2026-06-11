import { useState, useEffect} from 'react'
import { Grid, Container, Typography } from '@mui/material';
import MovieCard from './MovieCard';

const api_key = import.meta.env.VITE_API_KEY
const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`

export default function HomePage(){
  const [movies, setMovies] = useState([])

  //Will work without useEffect but it will cause infinite loop of fetching data and updating state
  //You can try to remove useEffect and see the console, you will see that it is fetching data and updating state infinitely
  useEffect(() => {
    fetch(api_url)
    .then(response => response.json())
    .then(data => {setMovies(data.results); console.log(data.results)})
    .catch(err => console.error('Errors:', err))
  }, [])

    return(
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5">
        Latest movies
      </Typography>
      <Grid container spacing={2} >
        {movies.map(movie => (
        <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 3 }} sx={{cursor: 'pointer'}}>
          <MovieCard movie={movie}/>
        </Grid>
        ))}
      </Grid>
    </Container>
    )
}
