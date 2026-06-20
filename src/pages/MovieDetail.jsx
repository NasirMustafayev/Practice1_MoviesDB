import { Container, Grid, Typography, Chip, Box, Divider, useTheme, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LanguageIcon from "@mui/icons-material/Language";
import GlobeIcon from "@mui/icons-material/Public";

const api_key = import.meta.env.VITE_API_KEY

export default function MovieDetail(){
    const { movie_id } = useParams()
    const [movie, setMovie] = useState(null)
    const theme = useTheme()

    const api_url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`

    useEffect(() => {
        fetch(api_url)
        .then(response => response.json())
        .then(data => {setMovie(data); console.log(data)})
        .catch(err => console.error('Errors:', err))
    }, [movie_id])

    return(
        movie ? (
             <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(to bottom, ${theme.palette.background.default}dd 0%, ${theme.palette.background.paper}dd 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) no-repeat center center / cover`,
        backgroundColor: theme.palette.background.default,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start">

          {/* LEFT — Poster */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
              }}
            />
          </Grid>

          {/* RIGHT — Details */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="h3"
              fontWeight={700}
              color="textPrimary"
              gutterBottom
            >
              {movie.title}
            </Typography>

            {movie.tagline && (
              <Typography
                variant="subtitle1"
                color="textSecondary"
                fontStyle="italic"
                gutterBottom
              >
                "{movie.tagline}"
              </Typography>
            )}

            <Divider sx={{ borderColor: theme.palette.divider, my: 2 }} />

            {/* Genres */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
              {movie.genres?.map((genre) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  variant="outlined"
                  sx={{ color: theme.palette.text.primary, borderColor: theme.palette.divider }}
                />
              ))}
            </Box>

            {/* Stats Row */}
            <Box sx={{ display: "flex", gap: 4, mb: 3, flexWrap: "wrap" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <StarIcon sx={{ color: "#f5c518" }} />
                <Typography color="textPrimary" fontWeight={600}>
                  {movie.vote_average?.toFixed(1)}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  / 10
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeIcon sx={{ color: theme.palette.text.secondary }} />
                <Typography color="textPrimary">{movie.runtime} min</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <CalendarMonthIcon sx={{ color: theme.palette.text.secondary }} />
                <Typography color="textPrimary">{movie.release_date}</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LanguageIcon sx={{ color: theme.palette.text.secondary }} />
                <Typography color="textPrimary">{movie.original_language}</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <GlobeIcon sx={{ color: theme.palette.text.secondary }} />
                <Typography color="textPrimary">{movie.production_countries?.[0]?.name || "N/A"}</Typography>
              </Box>
            </Box>

            <Divider sx={{ borderColor: theme.palette.divider, my: 2 }} />

            {/* Overview */}
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Overview
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              lineHeight={1.8}
            >
              {movie.overview}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
        ) : (
            <Typography variant="h6" align="center" color="textPrimary" sx={{ mt: 4 }}><CircularProgress aria-label="Loading…" /></Typography>
        )
    )
}