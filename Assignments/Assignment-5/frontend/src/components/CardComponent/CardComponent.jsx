import Card from 'react-bootstrap/Card';

function CardComponent({name,email,city}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Text> Name: {name} </Card.Text>
      <Card.Text> Email: {email} </Card.Text>
      <Card.Text> City: {city} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;