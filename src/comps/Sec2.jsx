import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Section2() {
  return (
    <div>
        <Card className = "card2" style={{ width: '60rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text> 
      <Button variant="primary">Go somewhere</Button>
      <Button variant="primary">Go somewhere</Button>

      <Button variant="primary">Go somewhere</Button>

    </Card.Body>
  </Card>
    </div>
  )
}
