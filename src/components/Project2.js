import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col, Carousel } from 'react-bootstrap'
import Project2a from '../images/Project2.PNG';
import Project2b from '../images/Project2b.PNG';
import Project2c from '../images/Project2c.PNG';
import "../App.css"



class Project2 extends Component {
    render() {
        return (
            <Jumbotron style={{ "min-height": "80vh" }}>
                <Row>
                    <Col xs={12} sm={12} xl={{ span: 6, offset: 1 }} md={{ span: 6, offset: 1 }} >
                        <h1>2. RLFT - Regex Lookup and Formatter</h1>
                        <p>
                            <em>Do you need to search through documents for specific keywords or phrases? Do you have to manually format extracted text to remove unnecessary line breaks and indentation? Do you want to filter Google Spreadsheets based on chosen column values but find it takes far too long to manually select each desired value? This React JS application attempts to address each of these pain points.</em>
                            <br />
                            <br />
                            <strong>What it is:</strong>
                            <br />

                            RLFT is a responsive React JS based website that uses Regex based data parsing to automatically parse text in response to user queries, format text to address common PDF extracted text issues, and apply highly useful but syntax sensetive spreadsheet formulas. Key features include:
                            <ul>
                                <br />
                                <li><strong>Search Large Text Documents for keywords, keyword frequency, positioning and surroundings</strong>
                                    <ul>
                                        <li>Through the use of Regex Strings</li>
                                        <li>Through the use of Comma Seperated Lists of Keywords</li>
                                    </ul>
                                </li>
                                <br />
                                <li><strong>Automatically format text exerpts to remove unnecessary line breaks, and identify bullet points</strong></li>
                                <ul>
                                    <li>Created to reduce the time needed to format PDF excerpts</li>
                                </ul>
                                <br />
                                <li><strong>Apply Google Spreadsheet Formulas to Input Text to enable easy filtering</strong></li>
                                <ul>
                                    <li>Accepts an input string of keywords a user wishes to filter a Google Sheets table for and the coordinates for the first cell in the given column</li>
                                    <li>Returns an appropriately formatted =match() or =isna(match()) formula</li>
                                    <li>Accepts both purely numeric strings and alphanumeric strings and handles them appropriately</li>
                                </ul>

                            </ul>
                        </p>
                        <p>
                            <Button variant="primary" href="https://saifsm1994.github.io/RLFT/#/">Live Demo</Button>
                            <Button variant="secondary" href="https://github.com/saifsm1994/RLFT">Github Repo</Button>

                        </p>
                    </Col>
                    <Col xs={12} sm={12} xl={5} md={5}>
                        <Carousel fade controls={true} >
                            <Carousel.Item interval={2400} >
                                <img
                                    className="d-block w-100"
                                    src={Project2a}
                                    alt="Lookup slide"
                                />
                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Lookup Page</h3>
                                    <p>Accepts Regexes or Comma Seperated Lists and Returns matches and related information </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src={Project2b}
                                    alt="Formatter slide"
                                />

                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Formatter Page</h3>
                                    <p>Accepts Text Input and Formats to Remove Additional Line Breaks and Bullet Point Errors.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src={Project2c}
                                    alt="Gsheet slide"
                                />

                                <Carousel.Caption style={{ "color": "black" }}>
                                    <h3>Google Sheets Formula Formatter</h3>
                                    <p>Accepts several input options and returns formatted Google Sheets Formulas for Advanced Filtering</p>
                                </Carousel.Caption>
                            </Carousel.Item>


                        </Carousel>
                    </Col>
                </Row>
                <Row style={{"marginBottom": "20px"}}></Row>

            </Jumbotron>
        );
    }
}

export default Project2;