import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                py: 2,
                mt: 'auto',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" color="textSecondary">
                © 2026 MovieDB. Nasir Mustafayev
            </Typography>
        </Box>
    );
}
