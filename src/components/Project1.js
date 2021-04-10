import React, { Component } from 'react';
import { Jumbotron,  Button, Row, Col, Carousel } from 'react-bootstrap'
import Project10 from '../images/Project1.png';
import Project1a from '../images/Project1a.png';
import Project1b from '../images/Project1b.png';
import Project1c from '../images/Project1c.png';
import Project1d from '../images/Project1d.png';
import Project1e from '../images/Project1e.png';
import Project1f from '../images/Project1f.png';
import "../App.css"


class Project1 extends Component {
    render() {
        return (
            <Jumbotron  style={{"min-height": "80vh"}} >
                <Row>
                <Col xs={12} sm={12} xl={{ span: 6, offset: 1 }} md={{ span: 6, offset: 1 }} >
                        <h1>1. CSV Database</h1>
                        <p>
                            <em>Do you have a 15,000 line spreadsheet that causes your computer to crash? A 250,000 line file that takes an hour to filter? This is the application for you.</em>
                            <br />
                            <br />
                            CSV Database is an application built to simplify the process of searching through extremely large spreadsheets. It accepts spreadsheets saved in the CSV format and converts them into a live, instantly searchable website which is almost as fast as more traditional but highly technical tools such as SQL based solutions. It is built on NodeJs and as such will run on any Windows, Linux or MacOS computer, the front end website has also been designed to be responsive and is accessible on any local network mobile device.
                             </p>
                             <h6>Features</h6>
                             <ul>
                             <li>Clean highly simplified UI to prevent user confusion</li>
                             <li>Responsive Design allows for easy of access across all devices</li>
                             <li>Allows for direct lookups of desired rows based on a chosen header 'keyword' where available</li>
                             <li>Allows for simple column based searches and filtering</li>
                             </ul>
                             <h6>Key Components</h6>
                             <ul>
                             <li>W2UI for spreadsheet components</li>
                             <li>Bootstrap4 for responsive web design</li>
                             <li>nodeJS and Express.js for back ender server</li>
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
                                    src={Project10}
                                    alt="Search slide"
                                />
                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>CSV-Database</h3>
                                    <p>Node JS app that converts spreadsheets into searchable websites.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
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
                            <Carousel.Item interval={2400} >
                                <img
                                    className="d-block w-100"
                                    src={Project1b}
                                    alt="Search slide"
                                />
                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Search Page Results</h3>
                                    <p>Response to a query of all entries containing the character '1' in their ID column.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src={Project1c}
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
                                    src={Project1d}
                                    alt="Lookup slide"
                                />

                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Lookup Page Results</h3>
                                    <p>Response to a 'all' query</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src={Project1e}
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
                                    src={Project1f}
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
                <Row style={{"paddingBottom": "20px"}}></Row>

               
            </Jumbotron>
        );
    }
}

export default Project1;