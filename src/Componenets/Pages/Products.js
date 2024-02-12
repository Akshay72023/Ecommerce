import React, { Fragment, useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import CartContext from "../store/cart-context";

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const Products = () => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (item,index) => {
    const existingItemIndex = cartCtx.items.findIndex((cartItem) => cartItem.title === `Album${index+1}`);

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartCtx.items];
      updatedItems[existingItemIndex].quantity++;
      cartCtx.updateItemQuantity(updatedItems);
    } else {
      cartCtx.addItem({
        ...item,
        title:`Album${index+1}`,
        quantity: 1
      });
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
                  <Card.Img
                    variant="center"
                    src={item.imageUrl}
                    style={{
                      transition: "transform .3s",
                      width: "50%",
                      height: "auto",
                      margin: "auto",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div style={{ marginTop: "15px",display:"flex", justifyContent:"center" ,alignItems:"center"}}>
                    <div style={{marginLeft:"10px",marginTop: '5px'}}>${item.price}</div>
                    <Button variant="outline-primary" style={{marginLeft:"10px", marginTop: '10px' }} onClick={() => addItemToCartHandler(item,index)}>Add to Cart</Button>
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
