import { useNavigate } from "react-router-dom"
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/movies')}>Movies</Nav.Link>
          <Nav.Link onClick={() => navigate('/dogs')}>Dogs</Nav.Link>
          <Nav.Link onClick={() => navigate('/actors')}>Actors</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation