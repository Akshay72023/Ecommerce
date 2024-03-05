import React, { Fragment, useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { productsArr } from "../ProductData/Data";
import { Link } from "react-router-dom";

const Products = () => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (item) => {
    const existingItemIndex = cartCtx.items.findIndex((cartItem) => cartItem.title === item.title);

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartCtx.items];
      updatedItems[existingItemIndex].quantity++;
      cartCtx.updateItemQuantity(updatedItems);
      console.log(updatedItems);
      updateCartInAPI(updatedItems);
    } else {
      const newItem = {
        ...item,
        quantity: 1
      };
      cartCtx.addItem(newItem);
      console.log(newItem);
      updateCartInAPI([...cartCtx.items, newItem]);
    }
  };

  const updateCartInAPI = async (cartItems) => {
    const email = localStorage.getItem('email');
    try {
      const response = await fetch(`${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItems),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update cart.');
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  return (
    <Fragment>
      <div style={headerStyle}>
        <h1 style={{ position: "absolute", top: '30px', color: 'white', fontSize: '5rem' }}>The Generics</h1>
      </div>
      <h2 style={{ textAlign: "center" }}>Music</h2>
      <div style={{ overflowX: "hidden" }}> 
        <Row>
          {productsArr.map((item, index) => (
            <Col key={index} md={6}>
              <Card style={{ margin: "20px", border: "none" }}>
                <Card.Body style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Card.Title style={{ marginBottom: "15px", fontWeight: "bold" }}>
                    Album {index + 1}
                  </Card.Title>
                  <Link to={`/product/${item.id}`}>
                    <Card.Img
                      variant="center"
                      src={item.imageUrl}
                      style={{
                        transition: "transform .3s",
                        width: "100%",
                        height: "auto",
                        margin: "auto",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}/>
                  </Link>
                  <div style={{ marginTop: "15px",display:"flex", justifyContent:"center" ,alignItems:"center"}}>
                    <div style={{marginLeft:"10px",marginTop: '5px'}}>${item.price}</div>
                    <Button variant="outline-primary" style={{marginLeft:"10px", marginTop: '10px' }} onClick={() => addItemToCartHandler(item)}>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  );
};

const headerStyle = {
  backgroundColor: 'gray',
  padding: '20px 0',
  textAlign: 'center',
  alignItems: "center",
  justifyContent: "center",
  marginTop: '2px',
  height: "200px",
  position: 'relative',
  display: "flex",
};


export default Products;
