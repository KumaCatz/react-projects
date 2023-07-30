import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import Welcome from './welcome/components/Welcome';
import ActorCard from './actors/components/ActorCard';
import Dogapi from './dogapi/components/Dogapi';
import MoviesList from './movie/components/MoviesList';
import Forms from './forms/components/Forms';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={ <MoviesList /> } />
        <Route path='/dogs' element={ <Dogapi /> } />
        <Route path='/actors/:id' element={ <ActorCard /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
