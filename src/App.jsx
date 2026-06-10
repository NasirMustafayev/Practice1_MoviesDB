import { useState, useEffect, use} from 'react'
import { Grid, Container, Typography, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./Navbar"
import Footer from "./Footer"
import MovieCard from "./MovieCard";
import theme from "./theme"

function App() {
  const api_key = "b76733de3107af4735863080d6012c03"
  const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
  const [movies, setMovies] = useState([])

  useEffect(() =>{

    fetch(api_url)
    .then(response => response.json())
    .then(data =>  setMovies(data.results))
    .catch(err => console.error('Errors:', err))
  }, [])

  return(
    <ThemeProvider theme={theme}>
    <CssBaseline>
    <Navbar/>
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
    <Footer/>
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App
