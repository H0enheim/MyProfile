import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import Sec3 from './Sec3';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/MyProfile.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>


 function MSec() {
  return (
    <Container className= 'Main'>
    <Row>

      <Col className= 'second'><Sec2 /></Col>
      <Col className= 'third'><Sec3 /> </Col>
    </Row>
    
  </Container>
  );
}

export default MSec;
