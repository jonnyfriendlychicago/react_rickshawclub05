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
                                            <Card.Title>RICKSHAW CLUB VALUES</Card.Title>
                                            <Card.Text>Charity, community, culture, curiousity, creativity, sustainability, travel, and knowledge.
                                            </Card.Text>
                                            <Card.Title>RICKSHAW CLUB PERKS</Card.Title>
                                            <Card.Text>Events, dao access, networking opportunites, private chat group, and web3 onboarding.
                                            </Card.Text>
                                            <Card.Title>RICKSHAW CLUB PAC</Card.Title>
                                            <Card.Text>On-chain political action committee to further rickshaw club causes coming 2024.
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
