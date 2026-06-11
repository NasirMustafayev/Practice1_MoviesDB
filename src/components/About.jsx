import { Container, Grid, Typography } from "@mui/material";

export default function About(){
    return(
        <Container maxWidth="md" sx={{ py: 6 , minHeight: '80vh'}}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
                About This Project
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                This project is a movie database application built using React and Material-UI. It allows users to browse popular movies, view detailed information about each movie, and search for specific titles. The application fetches data from The Movie Database (TMDb) API, providing up-to-date information on movies, including ratings, release dates, and overviews.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                The main features of this project include:
                <ul>
                    <li>Home page displaying popular movies with their posters, titles, ratings, and release years.</li>
                    <li>Detailed movie pages that provide comprehensive information about each movie, including its overview, genres, runtime, and user ratings.</li>
                    <li>A responsive design that ensures a seamless user experience across different devices.</li>
                </ul>
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                This project was created as a practice exercise to enhance my skills in React, API integration, and UI design using Material-UI. It serves as a demonstration of my ability to build a functional and visually appealing web application that interacts with external APIs.
            </Typography>
        </Container>
    )
}
