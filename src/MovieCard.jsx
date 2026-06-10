import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function MovieCard(){
    return(
        <Card sx={{height:'100%'}}>
            <CardMedia
            component="img"
            image="https://placehold.co/600x400"
            alt="Placeholder"
            height={300}
            />
            <CardContent>
                <Typography>
                    Placeholder
                </Typography>
            </CardContent>
        </Card>
    )
}
