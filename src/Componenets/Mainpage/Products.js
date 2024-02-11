import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
  return (
    <Fragment>
      <h2 style={{ textAlign: "center" }}>Music</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {productsArr.slice(0, 2).map((item, index) => (
            <Card
              style={{ width: "18rem", margin: "20px", border: "none" }}
              key={index}
            >
              <Card.Body>
                <Card.Title style={{ marginBottom: "15px", textAlign: "center",fontWeight:"bold" }}>
                  Album {index + 1}
                </Card.Title>
                <Card.Img
                  variant="center"
                  src={item.imageUrl}
                  style={{
                    transition: "transform .3s",
                    width: "90%",
                    height: "100%",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <Card.Text style={{ float: "left", marginTop: "15px" }}>
                  ${item.price}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  style={{ float: "right", marginTop: "15px" }}
                >
                  Add to Cart
                </Button>
                <div style={{ clear: "both" }}></div>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div>
          {productsArr.slice(2, 4).map((item, index) => (
            <Card
              style={{ width: "18rem", margin: "20px", border: "none" }}
              key={index + 3}
            >
              <Card.Body>
                <Card.Title style={{ marginBottom: "15px", textAlign: "center" ,fontWeight:"bold"}}>
                  Album {index + 3}
                </Card.Title>
                <Card.Img
                  variant="center"
                  src={item.imageUrl}
                  style={{
                    transition: "transform .3s",
                    width: "90%",
                    height: "100%",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <Card.Text style={{ float: "left", marginTop: "15px" }}>
                  ${item.price}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  style={{ float: "right", marginTop: "15px" }}
                >
                  Add to Cart
                </Button>
                <div style={{ clear: "both" }}></div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
