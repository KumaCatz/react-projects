import React from 'react';
import "../css/Movie.css";

const Movie = (props) => {
    const totalMinutes = props.MovieProp.runtime;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return (
    <div className="container">
        <main>
            <section>
                <img src={ props.MovieProp.poster } />
            </section>
            <section>
                <h1>
                    { props.MovieProp.name }
                </h1>
                <h3>
                    { props.MovieProp.year } | { hours }h { minutes }min
                </h3>
                <p>
                    { props.MovieProp.plot }
                </p>
                <div className="genre">
                    { props.MovieProp.genres.map( genre => <div>{genre}</div> ) }
                </div>
                { props.MovieProp.imdb && (
                    <p>
                        <a href={ props.MovieProp.imdb } target="_blank">More info...</a>
                    </p>
                )}
            </section>
        </main>
    </div>
    )
}

export default Movie;