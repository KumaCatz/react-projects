import ActorPage from './ActorPage';

function CardSpread({ actorsArray }) {

  return (
    <>
      {actorsArray.map((actor) => 
        <ActorPage actor={ actor } />
      )}
    </>
  )
}

export default CardSpread