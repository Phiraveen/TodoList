import React from 'react';
import Todolist from './Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <Container>
      <Row>
        <Col>
        <Todolist />
        </Col>
        
      </Row>
    </Container>
  )
}

export default App
