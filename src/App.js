import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React, useState, createContext } from 'react';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import Welcome from './welcome/components/Welcome';
import ActorCard from './actors/components/ActorCard';
import Dogapi from './dogapi/components/Dogapi';
import MoviesList from './movie/components/MoviesList';
import Exercises from './exercises/Exercises';
import Forms from './forms/components/Forms';

import 'bootstrap/dist/css/bootstrap.min.css';
import FetchNode from './node/fetch';
import { ReactNode } from './reactjsTeacher/ReactNode';

export const userContext = createContext(null)
export const textColor = createContext(null)

function App() {
  const [userName, setUserName] = useState('')
  const [color, setColor] = useState('')

  return (
    <ReactNode />
    // <FetchNode />
    // <BrowserRouter>
    //   <userContext.Provider value={{ userName, setUserName }}>
    //     <textColor.Provider value={{ color, setColor }}>
    //       <Navigation />
    //       <Routes>
    //         <Route path='/' element={<HomePage />} />
    //         <Route path='/movies' element={ <MoviesList /> } />
    //         <Route path='/dogs' element={ <Dogapi /> } />
    //         <Route path='/actors/:id' element={ <ActorCard /> } />
    //       </Routes>
    //     </textColor.Provider>
    //   </userContext.Provider>
    //   <Exercises />

    // </BrowserRouter>
  );
}

export default App;
