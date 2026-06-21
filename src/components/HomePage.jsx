import { useEffect} from 'react'
import { Grid, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import WatchListCard from './WatchListCard'

const api_key = import.meta.env.VITE_API_KEY
const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`

export default function HomePage(){
  //const [movies, setMovies] = useState([])
  const movies = useSelector(state => state.movies)
  const watchlist = useSelector(state => state.watchlist)

  const filtered = movies.filter(movie=> watchlist.includes(movie.id))

  const dispatcher = useDispatch()

  //Will work without useEffect but it will cause infinite loop of fetching data and updating state
  //You can try to remove useEffect and see the console, you will see that it is fetching data and updating state infinitely
  // useEffect(() => {
  //   fetch(api_url)
  //   .then(response => response.json())
  //   .then(data => {setMovies(data.results); console.log(data.results)})
  //   .catch(err => console.error('Errors:', err))
  // }, [])

    useEffect(() => {
    fetch(api_url)
    .then(response => response.json())
    .then(data => {dispatcher({type: 'SET_MOVIES', payload : data.results}); console.log(data.results)})
    .catch(err => console.error('Errors:', err))
  }, [])

    return(
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      { watchlist.length > 0 && (
      <>
      <Typography variant='h5'>
        Watchlist
      </Typography>
      <Grid container spacing={2}>
        {filtered.map(movie => (
        <Grid key={movie.id} size={{xs: 12, sm: 6, md: 3}} sx={{cursor : 'pointer'}}>
          <WatchListCard movie={movie}/>
        </Grid>
        ))}
      </Grid>
      </>
      )}
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
