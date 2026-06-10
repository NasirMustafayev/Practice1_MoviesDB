import { AppBar, Toolbar } from '@mui/material';

export default function Footer() {
    return (
        <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <p style={{ margin: '0 auto' }}>© 2026 MovieDB. Nasir Mustafayev</p>
            </Toolbar>
        </AppBar>
    );
}
