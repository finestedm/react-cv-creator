import React from 'react';
import InputPersonalInfo from './components/InputPersonalInfo';
import Display from './components/Display';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <Container className="App min-vh-100 d-flex justify-content-center align-items-center">
      <InputPersonalInfo />
      <Display />

    </Container>

  )
}
export default App;
