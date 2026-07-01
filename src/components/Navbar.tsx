import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

export default function Navbar() {
  const isLogged = useSelector((state: RootState) => state.login.isLogged)
  const username = useSelector((state: RootState) => state.login.user)

  const dispatcher = useDispatch()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MoviesDB
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/github">
            Github
          </Button>
          {isLogged ?
          (<Button onClick={()=> dispatcher({type: 'LOGOUT'})}>
            Log out
          </Button>
          ):
          (
          <Button component={Link} to="/login"> 
            Login
          </Button>
          )}
          <Typography>
            {isLogged ? 'Logged in |' : ''}
            {username}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
