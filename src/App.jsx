import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MovieDetail from './components/MovieDetail';
import About from './components/About';
import { themeDark, themeLight } from './theme'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const themevalue = useSelector(state => state.theme);
  const dispatcher = useDispatch();

  return(
    <ThemeProvider theme={themevalue ? themeDark : themeLight}>
    <CssBaseline/>
    <Navbar/>
    <button onClick={() => dispatcher({type: 'dark'})}>Toggle Theme</button>
    <p>Current theme: {themevalue ? 'Dark' : 'Light'}</p>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:movie_id' element={<MovieDetail/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </ThemeProvider>
  );
}

export default App
