import { useState } from 'react';

function Dogapi() {
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');

  async function handleClick() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImage(data.message);
      const breed = data.message.split('/');
      setBreed(breed[breed.length - 2]);
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <>
      <header>
        <h1>Random Dog Image</h1>
        <button onClick={ handleClick }>Random Image</button>
      </header>
      <main>
        <h2>{ breed }</h2>
        <img src={ image } />
      </main>
    </>
  );
}

export default Dogapi;
