import React, { useContext } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import CartContext from '../store/cart-context';

const Cart = (props) => {
    const cartctx = useContext(CartContext);
    const cartElements = cartctx.items;
    const purchaseMade=()=>{
        alert("Your purchase is successful")
    }
    
    const total = cartElements.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.quantity * currentItem.price);
    }, 0);

    const removeitem=(item)=>{cartctx.removeItem(item)};

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
                            <p>{item.title}</p>
                        </Col>
                        <Col>
                            <p>${item.price}</p>
                        </Col>
                        <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <p style={{ marginBottom: '5px', marginRight: '5px' }}>{item.quantity}</p>
                            <Button variant="danger" size="sm" onClick={()=>removeitem(item)}>Remove</Button>
                        </Col>
                    </Row>
                ))}
                <Row>
                    <Col style={{ textAlign: 'right' }}>Total ${total.toFixed(2)}</Col>
                </Row>
                <Row style={{ display: "flex", flexDirection: "column" }}>
                    <Col></Col>
                    <Col>
                        <Button onClick={()=>purchaseMade()}variant="primary" style={{ textAlign: "center", justifyContent: "center", marginLeft: "70px", marginTop:"20px"}}>Purchase</Button>
                    </Col>
                </Row>   
            </Container>
        </div>
    );
};

export default Cart;
