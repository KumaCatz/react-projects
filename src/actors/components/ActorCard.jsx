import { useState } from 'react';
import ActorPage from "./ActorPage";
    

function ActorCard() {
  const [search, setSearch] = useState('')
  const [actorsArray, setActorsArray] = useState([]);

  const changeSearch =  async (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=${search}`);
      const data = await response.json();
      setActorsArray(data.results)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <>
      <input type='text'
      onChange={ changeSearch } />
      {actorsArray.map((actor) => 
        <ActorPage actor={ actor } />
      )}
    </>
  )
}

export default ActorCard;