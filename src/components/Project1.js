import React, { Component } from 'react';
import { Jumbotron,  Button, Row, Col, Carousel } from 'react-bootstrap'
import Project1a from '../images/Project1.PNG';
import Project1b from '../images/Project1b.PNG';
import Project1c from '../images/Project1c.PNG';
import Project1d from '../images/Project1d.PNG';
import "../App.css"


class Project1 extends Component {
    render() {
        return (
            <Jumbotron  style={{"min-height": "80vh"}} >
                <Row>
                <Col xs={12} sm={12} xl={{ span: 6, offset: 1 }} md={{ span: 6, offset: 1 }} >
                        <h1>1. CSV Database</h1>
                        <p>
                            A simple NodeJS application that turns any CSV Spreadsheet into a live searchable website. Designed to allow individuals whithout programming knowledge to easily parse extremely large (10k-200k+ row) csv spreadsheets. 
                             </p>
                             <h6>Features</h6>
                             <ul>
                             <li>Allows for direct lookups of values based on a chosen header 'keyword'</li>
                             <li>Allows searching for complete or partial matches based on column values as well as subsequent filtering</li>
                             </ul>
                             <h6>Key Components</h6>
                             <ul>
                             <li>W2UI for spreadsheet components</li>
                             <li>nodeJS and Express.js</li>
                             <li>Fs for file parsing</li>
                             </ul>
                        <p>
                        <Button variant="primary" href="http://csvdatabase.saifsm.com/Static/">Live Demo</Button>
                        <Button variant="secondary" href="https://github.com/saifsm1994/CSV-Database">Github Repo</Button>
                        </p>
                    </Col>
                    <Col xs={12} sm={12} xl={5} md={5}>
                        <Carousel fade controls={true} >
                            <Carousel.Item interval={2400} >
                                <img
                                    className="d-block w-100"
                                    src={Project1a}
                                    alt="Search slide"
                                />
                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Search Page</h3>
                                    <p>Allows for searching by content of columns and filtering.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src={Project1b}
                                    alt="Lookup slide"
                                />

                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Lookup Page</h3>
                                    <p>Allows for Direct Lookup based on index terms.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src={Project1c}
                                    alt="Upload slide"
                                />

                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Upload Datafile</h3>
                                    <p>Accepts any CSV file and keyword.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src={Project1d}
                                    alt="Delete slide"
                                />

                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Delete Datafile</h3>
                                    <p>Allows for the deletion of any uploaded Data files.</p>
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