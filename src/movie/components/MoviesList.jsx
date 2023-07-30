import { useState } from 'react';
import Movie from './Movie';
import '../css/MoviesList.css'

const initialMovies = [
    {
        "id": "1",
        "name": "Forrest Gump",
        "runtime": 142,
        "year": 1994,
        "plot": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        "genres": ["Drama", "Comedy"],
        "poster": "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        "imdb": "https://www.imdb.com/title/tt0109830/"
    },

    {
        "id": "2",
        "name": "Fight Club",
        "runtime": 139,
        "year": 1999,
        "plot": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "genres": ["Drama"],
        "poster": "https://cinemadetective.com/wp-content/uploads/2020/04/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    }
];

const MoviesList = () => {
    const [movies, setMovies] = useState(initialMovies);
    const [filtered, setFiltered] = useState(false);

    function handleClick() {
        if (filtered == true) {
            setMovies(initialMovies);
            setFiltered(false);
        } else {
            const filteredArr = movies.filter(movie => movie.genres.includes('Comedy'));
            setMovies(filteredArr);
            setFiltered(true);
        }
    }

    function handleChange(e) {
        const filteredValue = e.target.value;
        const filteredSearch = initialMovies.filter(movie => movie.name.toLowerCase().includes(filteredValue.toLowerCase()));
        setMovies(filteredSearch);
    }

    return (
        <>
            <header>
                <h1>Movies Page</h1>
                <div>
                    <input type="text" placeholder="Filter Movies..." onChange={ handleChange } />
                    <button onClick={ handleClick }>Toggle Comedy Only</button>
                </div>
            </header>
            {movies.map((movie) => <Movie MovieProp={movie} />)}
        </>
    )
}

export default MoviesList;