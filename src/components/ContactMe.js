import React, { Component } from 'react';
import { Form, Jumbotron, Row, Col, Button } from 'react-bootstrap'


class ContactMe extends Component {
    constructor(props) {
        super(props)
        this.updateEmail = this.updateEmail.bind(this)
        this.updateMessage = this.updateMessage.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.updateSubject = this.updateSubject.bind(this)
        this.state = ({
            email: "name@example.com",
            message: "Message",
            subject: "Subject"
        })
    }

    updateEmail(e) {
        this.setState({ email: e.target.value })
    }
    updateMessage(e) {
        this.setState({ message: e.target.value })
    }
    updateSubject(e) {
        this.setState({ subject: e.target.value })
    }
    sendMessage() {
        let email = "mailto:" + this.state.email + "?subject=" + this.state.subject + "&body=" + this.state.message
        alert(email)
        window.open(email, "Contact Saif")
    }

    render() {
        return (
            <Jumbotron  style={{"min-height": "80vh"}}>
                <Row>
                    <Col xl={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }} md={{ span: 6, offset: 2 }} sm={12} xs={12} style={{ "background-color": "grey", "margin-bottom": "10px", "border": "solid white 1px", "color": "black", "border-radius": "25px", "padding-top": "5px" }}>
                        <p style={{ "text-decoration-line": "underline", "text-decoration-style": "double" }}><strong>
                            Contact Details
                    </strong>

                        </p>
                        <p><strong>
                            Email Me: <a style={{ "color": "white", "text-decoration-line": "underline", "text-decoration-style": "single" }} href="mailto:Saif.Mustafa94@Gmail.com">Saif.Mustafa94@Gmail.com</a>
                        </strong>

                        </p>

                        <p><strong>
                            Phone: <a style={{ "color": "white", "text-decoration-line": "underline", "text-decoration-style": "single"  }} href="tel:647-804-8977">647-804-8977</a>
                        </strong>
                        </p>

                        <p><strong>
                            Github: <a style={{ "color": "white", "text-decoration-line": "underline", "text-decoration-style": "single"  }} href="https://github.com/saifsm1994/">SaifSM1994</a>
                        </strong>
                        </p>

                        <p><strong>
                            Location: <span style={{ "color": "white" }} >Vancouver, BC, Canada</span>
                        </strong>
                        </p>

                    </Col>
                </Row>

                <Row>
                    <Col xl={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }} md={{ span: 6, offset: 2 }} sm={12} xs={12} style={{"margin-top":"10px", "background-color": "White", "padding": "10px", "border-radius": "25px"}}>
                        <Form onSubmit={() => { }}>
                            <h6>Contact Form</h6>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" onChange={(e) => { this.updateEmail(e) }} value={this.state.email} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea0">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control as="textarea" rows={1} onChange={(e) => { this.updateSubject(e) }} value={this.state.subject} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => { this.updateMessage(e) }} value={this.state.message} />
                            </Form.Group>
                            <Button bg="primary" onClick={() => { this.sendMessage() }}> Submit </Button>
                        </Form>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}


export default ContactMe;