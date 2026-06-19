import { Container, Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function Login() {
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Welcome
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Sign in to your account
            </Typography>
          </Box>

          <form>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Username"
                type="text"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Sign In
              </Button>
            </Stack>
          </form>
      </Box>
    </Container>
  );
}
