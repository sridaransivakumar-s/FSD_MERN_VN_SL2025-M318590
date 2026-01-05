import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = ({id,title,description,image}) => {
  return (
   <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='h-2 text-truncate'>
        {description}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
