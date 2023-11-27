import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Tv from './pages/TV';
import Movie from './pages/Movie';
import Login from './pages/login';
import Program from './pages/Program';
import Movies2 from './pages/Movies2';

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies2' element={<Movies2 />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/person' element={<Celebrity />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/movies/:title' element={<Movie />} />
          <Route path='/tv/:title' element={<Program />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
