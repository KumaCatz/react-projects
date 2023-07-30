async function fetchActor(newSearchText) {
    const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=${newSearchText}`);
    const data = await response.json();
    return data.results
}

export default fetchActor