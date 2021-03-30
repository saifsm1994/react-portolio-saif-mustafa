import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col, Carousel } from 'react-bootstrap'
import Project1a from '../images/otherProjects/Simon.png';
import Project1b from '../images/otherProjects/challenge2.png';
import Project1c from '../images/otherProjects/SolarApp.png';
import "../App.css"

class Project1 extends Component {
    render() {
        return (
            <Jumbotron style={{ "min-height": "80vh" }}>
                <Row>
                    <Col xs={12} sm={12} xl={{ span: 6, offset: 1 }} md={{ span: 6, offset: 1 }} >
                        <h1>3. Other Projects</h1>
                        <p>
                            Other coding projects I've worked on over the past two years have included:
                             </p>
                        <h6>Task Automation</h6>
                        <ul>
                            <li>Automating repetitive tasks through the use of AutoHotKey, including: </li>
                            <ul>
                                <li>Automating common Google Spreadsheet and Excel tasks</li>
                                <li>Automating common data manipulation tasks such as bulk file renaming</li>
                            </ul>
                        </ul>
                        <h6>Developing a Solar Power Viability estimation tool:</h6>
                        <ul>
                            <li>A simple system that crossreferences a ip-geolocation lookup against a NASA sunlight dataset and current solar power pricing trends to provide basic information on viability of solar power for any given user</li>
                        </ul>
                        <h6>Coding challenges, including:</h6>
                        <ul>
                            <li>Re-creating the traditional 'Simon' children's game through pure html, css and Javascript</li>
                            <li>Creating a functional TIC-TAC-TOE game through pure html, css and Javascript</li>
                            <li>Creating a functional calculator through pure html, css and Javascript</li>
                        </ul>

                        <h6>API projects, including:</h6>
                        <ul>
                            <li>Using Google Wavenet Voice APIs, Lexrank text summary and Reddit APIs to automatically generate podcast of reddit pages</li>
                            <li>Creating simple microservice APIs</li>
                        </ul>

                        <p>
                            {/* <Button variant="primary" href="http://csvdatabase.saifsm.com/Static/">Live Demo</Button> */}
                            <Button variant="secondary" href="https://github.com/saifsm1994/">Github Repo</Button>
                        </p>
                    </Col>
                    <Col xs={12} sm={12} xl={5} md={5}>
                        <Carousel fade controls={true} >
                            <Carousel.Item interval={2400} >
                                <img
                                    className="d-block w-100"
                                    src={Project1a}
                                    alt="Simon slide"
                                />
                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Simon Game</h3>
                                    <p>Coding challenge to recreate classic children's game</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src={Project1b}
                                    alt="Recreation slide"
                                />

                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Re-creation Challenge</h3>
                                    <p>Coding challenge to recreate the given page</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src={Project1c}
                                    alt="Solar slide"
                                />

                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Solar Estimation Tool</h3>
                                    <p>Automatically determines solar power cost breakdown based on geolocation.</p>
                                </Carousel.Caption>
                            </Carousel.Item>


                        </Carousel>
                    </Col>
                </Row>


            </Jumbotron>
        );
    }
}

export default Project1;