import React, { Fragment } from "react";
import { Button, Row, Col } from "react-bootstrap";

const concert = [
    {
        date: 'JUL16',
        location: 'DETROIT, MI',
        venue: 'DTE ENERGY MUSIC THEATR',
    },
    {
        date: 'JUL19',
        location: 'TORONTO,ON',
        venue: 'BUDWEISER STAGE',
    },
    {
        date: 'JUL 22',
        location: 'BRISTOW, VA',
        venue: 'JIGGY LUBE LIVE',
    },
    {
        date: 'JUL 29',
        location: 'PHOENIX, AZ',
        venue: 'AK-CHIN PAVILION',
    },
    {
        date: 'AUG 2',
        location: 'LAS VEGAS, NV',
        venue: 'T-MOBILE ARENA'
    },
    {
        date: 'AUG 7',
        location: 'CONCORD, CA',
        venue: 'CONCORD PAVILION'
    }
];

const Home = () => {
    return (
        <Fragment>
            <div style={{ overflowX: "hidden" }}>
                <div style={headerStyle}>
                    <h1 style={{ position: "absolute", top: '0', color: 'white', fontSize: '5rem', textAlign: "center", width: "100%" }}>The Generics</h1>
                    <Button variant="outline-info" size="lg" style={{ marginTop: '6rem', width: '250px', color: "white", backgroundColor: 'transparent' }}>Get Our Latest Album</Button>
                </div>
                <h1 style={{ textAlign: "center", marginTop: "2px" }}>Tours</h1>
                {concert.map((item, index) => (
                    <Fragment key={index}>
                        <Row style={{ borderBottom: '1px solid black', marginBottom: '10px' }}>
                            <Col className="text-center" >{item.date}</Col>
                            <Col className="text-center">{item.location}</Col>
                            <Col className="text-center">{item.venue}</Col>
                            <Col className="text-center">
                                <Button variant="primary" style={{ marginBottom: "2px" }}>Buy Tickets</Button>
                            </Col>
                        </Row>
                    </Fragment>
                ))}
            </div>
        </Fragment>
    )
};

const headerStyle = {
    backgroundColor: 'gray',
    padding: '20px 0',
    textAlign: 'center',
    alignItems: "center",
    marginTop: '2px',
    height: "200px",
    position: 'relative',
}

export default Home;
