import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import MusicImage from "../image/Music_image.jpg"; 

const About = () => {
    return (
        <Fragment>
            <div style={headerStyle}>
            <h1 style={{ position: "absolute", top: '30px', color: 'white', fontSize: '5rem' }}>The Generics</h1>
            </div>
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>About</h2>
            <div className="container">
                <Row style={{ marginTop: "20px", alignItems: "center" }}>
                    <Col sm={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
                        <img src={MusicImage} alt="Music album cover" style={{ width: "60%", height: "auto", borderRadius: "50%", objectFit: "contain",marginLeft:"15rem",marginBottom:"20px"}} />
                    </Col>
                    <Col sm={12} md={6} style={{ paddingRight: "60px" }}>
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eaque perspiciatis atque assumenda nam obcaecati, veritatis earum debitis hic, excepturi nostrum quis quo nemo nesciunt dignissimos reiciendis illo nulla vitae! Culpa, quis dolorum! Corporis, quisquam. Saepe ullam quam culpa ut vitae, officia debitis necessitatibus beatae quidem magnam itaque facilis aliquid laboriosam, accusamus accusantium molestias alias consequatur ducimus cupiditate voluptates possimus! Sed, quibusdam soluta rerum, dolorem nisi dicta ipsa dolores fugit tenetur quis, exercitationem ratione enim voluptates numquam esse. Qui voluptatibus doloremque nesciunt asperiores modi facilis, delectus harum tenetur accusamus doloribus.
                        </p>
                    </Col>
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

export default About;
