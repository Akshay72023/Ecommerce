import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

const Cart = (props) => {
  return (
    <div style={{ position: 'absolute', right: '0', width: '300px', top: "60px", height: '100%', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.2)', padding: '20px', zIndex: '9999' }}>
      <Button variant="light" style={{ float: 'right', border: 'none' }} onClick={props.handleCartClick}>X</Button>
      <Container>
        <Row>
          <Col>
            <h3 style={{ textAlign: 'center' }}>Cart</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Item</h5>
          </Col>
          <Col>
            <h5>Price</h5>
          </Col>
          <Col>
            <h5>Quantity</h5>
          </Col>
        </Row>
        {cartElements.map((item, index) => (
          <Row key={index} style={{ marginBottom: '10px', alignItems: 'center' }}>
            <Col>
              <Image src={item.imageUrl} alt={item.title} rounded style={{ width: '50px', height: '50px' }} />
              <p>Album{index + 1}</p>
            </Col>
            <Col>
              <p>${item.price}</p>
            </Col>
            <Col style={{ display: "flex", alignItems: "center" ,justifyContent:"center"}}>
              <p style={{ marginBottom: '5px',marginRight: '5px' }}>{item.quantity}</p>
              <Button variant="danger" size="sm" >Remove</Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Cart;
