import { Grid, Container, Typography, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./Navbar"
import Footer from "./Footer"
import MovieCard from "./MovieCard";
import theme from "./theme"


const movies =[
  {id: 1, title: "Operation Valkyire", year: 2009, poster: "https://placehold.co/600x400", description: "Lorem ipsum dolor sit amet", rating: 8.1},
  {id: 2, title: "The Dark Knight", year: 2008, poster: "https://placehold.co/600x400", description: "Lorem ipsum dolor sit amet", rating: 9.0},
  {id: 3, title: "Inception", year: 2010, poster: "https://placehold.co/600x400", description: "Lorem ipsum dolor sit amet", rating: 8.8},
  {id: 4, title: "The Matrix", year: 1999, poster: "https://placehold.co/600x400", description: "Lorem ipsum dolor sit amet", rating: 8.7},
  {id: 5, title: "Pulp Fiction", year: 1994, poster: "https://placehold.co/600x400", description: "Lorem ipsum dolor sit amet", rating: 8.9},
  {id: 6, title: "The Lord of the Rings: The Return of the King", year: 2003, poster: "https://placehold.co/600x400", description: "Lorem ipsum dolor sit amet", rating: 8.9},
  {id: 7, title: "The Godfather", year: 1972, poster: "https://placehold.co/600x400", description: "Lorem ipsum dolor sit amet", rating: 9.2},
  {id: 8, title: "The Shawshank Redemption", year: 1994, poster: "https://placehold.co/600x400", description: "Lorem ipsum dolor sit amet", rating: 9.3},
]

function App() {
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
        <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{cursor: 'pointer'}}>
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
