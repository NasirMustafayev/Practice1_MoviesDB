import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MovieDetail from './components/MovieDetail';
import About from './components/About';
import theme from './theme'

function App() {
  return(
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Navbar/>
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
