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
  const statevalue = useSelector(state => state.simple);
  const themevalue = useSelector(state => state.theme);
  const dispatcher = useDispatch();

  const [updateValue, setUpdateValue] = useState('')

  return(
    <ThemeProvider theme={themevalue ? themeDark : themeLight}>
    <CssBaseline/>
    <Navbar/>
    State from Redux : {statevalue}
    <button onClick={() => dispatcher({type: 'update'})}>Update simple state</button>
    <br/>
    <input value={updateValue} onChange={({ target: { value }}) => setUpdateValue(value)}/>
    <button onClick={()=> dispatcher({type: 'update_by', payload : updateValue})}>Update with text</button>
    <br/>
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
