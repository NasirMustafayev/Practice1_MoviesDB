import { Grid, Container, Typography, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./Navbar"
import MovieCard from "./MovieCard";
import theme from "./theme"

function App() {
  return(
    <ThemeProvider theme={theme}>
    <CssBaseline>
    <Navbar/>
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h5">
        Latest movies
      </Typography>
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MovieCard></MovieCard>
        </Grid>
      </Grid>
    </Container>
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App
