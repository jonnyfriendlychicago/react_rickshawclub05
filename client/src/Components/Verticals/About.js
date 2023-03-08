import React, { useState } from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';

const Community = (props) => {

    return (
        <>
            <Container fluid className="p-0 mt-5" >
                <Row style={{height: "100vh"}} className="p-0 m-0">

                    <Col sm={0} lg={2} className="d-none d-lg-block p-0 m-0"></Col>

                    <Col sm={12} lg={8} className="bg-light p-0 m-0">
                        <Card className="m-3 p-3">
                            <Row>
                                <Col className="d-flex flex-wrap justify-content-center">

                                    {/*<Card className="text-center m-3 border-0" style={{width: "18rem",  height: "25rem"}}>*/}
                                    <Card className="text-center m-3 border-0 " style={{width: "50rem"}}>
                                        {/*    <Card className="text-center m-3 border-0" >*/}
                                        <Card.Body>
                                            <Card.Text>There are 10,000 rickshaw club hoodies circling cyberspace. Each rickshaw club hoodie features unique intricate designs, patterns, and color combinations that pay homage to the traditional rickshaw and its cultural significance. Each rickshaw club hoodie is one of a kind.
                                            </Card.Text>
                                            <Card.Text>Rickshaw club hoodies are made with sustainable materials such as organic cotton and recycled polyester. Rickshaw club is for eco-conscious and culturally curious citizens who want to celebrate rickshaws.
                                            </Card.Text>
                                            <Card.Text>Rickshaw club design principles are simple: no repeats, no zippers, no inventory.
                                            </Card.Text>
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

export default Community;
