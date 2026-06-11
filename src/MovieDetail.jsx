import {Container, Grid, Typography, The} from "@mui/material";


export default function MovieDetail({movie_id}){
    return(
        <ThemeProvider theme={createTheme()}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4">Movie Detail</Typography>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}
