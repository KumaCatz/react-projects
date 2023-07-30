import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';


function Welcome() {
  const [formData, setFormData] = useState({
    pokemon: '',
    character: '',
    episode: '',
    username: '',
  })
  const [count, setCount] = useState(0);

  const user = {
    date: new Date().toISOString().split('T')[0],
  }

  function handleChange(e) {
    // const { name, value } = e.target;

    // if(name == 'name') {
    //   setUsername(value);
    // }
  
  }

  function handleClick(e) {
    e.preventDefault();
    // setUsername(username);
    setCount(count + 1);
  }

  return (
    <div> 
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <div>{ new Date().toISOString().split('T')[0] }</div>
          </Col>
          <Col xs lg="2">
            {/* <div>{ username }</div> */}
          </Col>
        </Row>
      </Container>
      <Form>
        <div className='justify-content-center'>welcome</div>
        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder='Favourite Pokemon...' name='pokemon' onChange={ handleChange } />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder='Favourite Character...' name='character' onChange={ handleChange } />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control type='text' placeholder='Favourite Episode...' name='episode' onChange={ handleChange } />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder='Name...' name='name' onChange={ handleChange } />
        </Form.Group>
        <button type='submit' onClick={ handleClick }>Submit</button>
        <div>Times Submited: { count }</div>
      </Form>
    </div>
  );
}

export default Welcome;
