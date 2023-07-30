import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function ActorPage(props) {
  const imgSrc = "https://image.tmdb.org/t/p/w500" + props.actor.profile_path;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ imgSrc } />
      <Card.Body>
        <Card.Title>{props.actor.name}</Card.Title>
      </Card.Body>
    </Card>  
  )
}

export default ActorPage