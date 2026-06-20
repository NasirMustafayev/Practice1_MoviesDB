import { Container, Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";

export default function Login() {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const isLogged = useSelector(state => state.login.isLogged)
    const dispatcher = useDispatch()
  
    const navigate = useNavigate()

    const handleLogin = (e)=> {
      e.preventDefault()

        if (username == 'user' && password == 'user') {
            dispatcher({type: 'LOGIN', payload: username})
            navigate('/')
        }
        else{
            
        }
    }

    if (isLogged){
      return <Navigate to='/'/>
    }

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
            <form onSubmit={handleLogin}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Username"
                type="text"
                variant="outlined"
                
                value={username}
                onChange={({ target: {value}})=> setUserName(value)}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                name="password"

                value={password}
                onChange={({ target: {value}}) => setPassword(value)}
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
