import React, { useState } from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';

const Home = (props) => {

    return (
        <>
            <Container fluid className="p-0 mt-5" >
                <Row style={{height: "100vh"}} className="p-0 m-0">

                    <Col sm={0} lg={2} className="d-none d-lg-block p-0 m-0"></Col>

                    <Col sm={12} lg={8} className="bg-light p-0 m-0">
                        <Card className="m-3 p-3">
                            <Row>
                                <Col className="d-flex flex-wrap justify-content-center">

                                    <Card className="text-center m-3 border-0" style={{width: "18rem",  height: "25rem"}}>
                                        <Card.Body>
                                            <Card.Title>Join the Queue</Card.Title>
                                            <Card.Img fluid src='../Assets/Images/bigyellow.png'  />
                                        </Card.Body>
                                    </Card>

                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col sm={0} lg={2} className="d-none d-lg-block p-0 m-0"></Col>

                </Row>
            </Container>
        </>

    ) // end return
} // end const

export default Home;
