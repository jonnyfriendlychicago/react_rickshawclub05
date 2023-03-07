import React, { useState } from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';

const Gear = (props) => {

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
                                            <Card.Title>JOIN THE QUEUE</Card.Title>
                                            <Card.Text>Once your rickshaw club hoodie is ready, you will be notified via email. Rickshaw Club hoodies must be claimed within 72 hours, otherwise it will move on. Dont worry though, if you dont claim it in time, another one will swing by shortly. New rickshaw club hoodies get released periodically so please be patient...
                                            </Card.Text>
                                            <Card.Title>ADULT HOODIE</Card.Title>
                                            <Card.Text>Relaxed fit and super soft blend with brushed fleece inside, double-lined hood, fabric weight 300 g/m²
                                            </Card.Text>

                                            <Card.Img fluid src='../Assets/Images/blueHoodieBigYellow.png'  />

                                            {/*<Card.Img style={{width: "25rem"}} fluid src='../Assets/Images/blueHoodieBigYellow.png'  />*/}

                                            <Card.Title>HOODIES FOR KIDDOS</Card.Title>
                                            <Card.Text>Available soon: kids eco hoodie with ribbed cuffs, lined hood, fabric weight 280 g/m² certified - grs, ocs, gots.
                                            </Card.Text>
                                            {/*<Card.Img style={{width: "25rem"}} fluid src='../Assets/Images/blueHoodieBigYellow.png'  />*/}
                                            <Card.Img fluid src='../Assets/Images/blueHoodieBigYellow.png'  />
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

export default Gear;
