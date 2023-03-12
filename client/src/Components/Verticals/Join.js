import React, { useState } from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios';
const Join = (props) => {

    //keep track of what is being typed via useState hook
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [nameFirst, setNameFirst] = useState("");
    const [nameLast, setNameLast] = useState("");
    const [ethereumWalletAddy, setEthereumWalletAddy] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://3.145.203.81/api/inquiry', {
        // axios.post('http://localhost:8080/api/inquiry', {
            email,
            nameFirst,    // this is shortcut syntax for firstName: firstName,
            nameLast,
            ethereumWalletAddy// this is shortcut syntax for lastName: lastName
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }

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

                                            <form onSubmit={onSubmitHandler}>
                                                <p>
                                                    <label>Email</label><br/>
                                                    {/* When the user types in this input, our onChange synthetic event
                                                    runs this arrow function, setting that event's target's (input)
                                                    value (what's typed into the input) to our updated state   */}
                                                    <input type="text" onChange = {(e)=>setEmail(e.target.value)}/>
                                                </p>
                                                <p>
                                                    <label>First Name</label><br/>
                                                    <input type="text" onChange = {(e)=>setNameFirst(e.target.value)}/>
                                                </p>
                                                <p>
                                                    <label>Last Name</label><br/>
                                                    <input type="text" onChange = {(e)=>setNameLast(e.target.value)}/>
                                                </p>
                                                <p>
                                                    <label>Eth Wallet Addy</label><br/>
                                                    <input type="text" onChange = {(e)=>setEthereumWalletAddy(e.target.value)}/>
                                                </p>

                                                <input type="submit"/>
                                            </form>

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

export default Join;
