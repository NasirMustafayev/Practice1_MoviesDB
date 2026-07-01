import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline, Box, Button } from '@mui/material';
import { themeDark, themeLight } from './theme'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MovieDetail from './pages/MovieDetail';
import About from './components/About';
import Login from './pages/Login';

function App() {
  const themevalue = useSelector(state => state.theme);
  const dispatcher = useDispatch();

  return(
    <ThemeProvider theme={themevalue ? themeDark : themeLight}>
    <CssBaseline/>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar/>
      <Box sx={{ position: 'absolute', top: 80, right: 20, zIndex: 10 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => dispatcher({type: 'dark'})}
          sx={{ textTransform: 'none', fontWeight: 500 }}
        >
          {themevalue ? '☀️ Light' : '🌙 Dark'}
        </Button>
      </Box>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/movie/:movie_id' element={<MovieDetail/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App
