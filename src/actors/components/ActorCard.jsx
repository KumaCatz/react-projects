import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import fetchActor from './fetchActor';
import FetchInput from './FetchInput';
import CardSpread from './CardSpread';

function ActorCard() {
  const [actorsArray, setActorsArray] = useState([]);

  async function handleChange(e) {
    const fetchResults = await fetchActor(e.target.value);
    setActorsArray(fetchResults);    
  }

  return (
    <>
      <FetchInput handleChange={ handleChange } />
      <CardSpread actorsArray={ actorsArray } />
    </>
  );
}

export default ActorCard;