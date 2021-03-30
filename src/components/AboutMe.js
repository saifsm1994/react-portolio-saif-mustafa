import React, { Component } from 'react';
import { Col, Row, Jumbotron, Image } from 'react-bootstrap'
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSass, faNodeJs, faReact, faBootstrap, faGit, faNpm, faJs} from '@fortawesome/free-brands-svg-icons'
import AOS from "aos";
import "aos/dist/aos.css";

class AboutMe extends Component {
    componentDidMount(){
        AOS.init({
            // duration : 5000
          });
    }
    render() {
        return (
            <Jumbotron style={{ "min-height": "80vh" }}>
                <Row>
                    <Col xs={12} xl={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} >
                        <h1>About Me</h1>
                        <p>
                            Aspiring Self-taught Developer proficient in HTML, CSS, JavaScript, Node.js and React. I am currently employed full time as a Medical Policy Analyst in Vancouver, Canada but am always seeking opportunities to further develop my programming skills through the creation of useful projects and online courses.
                    < br />
                            < br />
                            Please find two of my most recent projects featured here in the Project 1 and 2 tabs.
                    <br />
                            < br />
                            Older projects can also be found on my github. These include:
                    <ul>
                                <li>
                                    Exploring the Use of APIs such as Google Map APIs, Social Media APIs, and Google Wavenet APIs
                        </li>
                                <li>
                                    Developing re-creations of common games such as the 'Simon Game' and 'Tic Tac Toe'
                        </li>
                                <li>Creating small micro-service APIs though Node.js</li>
                            </ul>
                        </p>

                    </Col>
                    <Col xl={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} style={{ "margin-top": "20px", "padding-bottom": "20px" }} data-aos="zoom-in">
                        <h1 style={{ "margin-bottom": "20px" }}>Proficient Skills</h1>
                        <Row>
                            <Col xl={3} lg={3} md={3} sm={12} xs={12} >
                                <div><i className="fa fa-html5 fa-4x"> HTML</i></div>
                                <Col>
                                    <div><i className="fa fa-css3 fa-2x"> CSS</i></div>
                                </Col>
                                <Col>
                                    <div><i className="fa fa-2x"><FontAwesomeIcon icon={faSass} /> Sass</i></div>
                                </Col>
                                <Col>
                                    <div><i className="fa fa-2x"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</i></div>
                                </Col>
                            </Col>

                            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <div><i className="fa fa-4x"><FontAwesomeIcon icon={faNodeJs} /> node.JS</i></div>

                                <Col>
                                    <div><i className="fa fa-2x"><FontAwesomeIcon icon={faGit} /> Git</i></div>
                                </Col>

                                <Col>
                                    <div><i className="fa fa-2x"><FontAwesomeIcon icon={faNpm} /> Npm</i></div>
                                </Col>
                            </Col>

                            <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                            <div><i className="fa fa-4x"><FontAwesomeIcon icon={faJs} /> JavaScript</i></div>
                                <Col>
                                    <div><i className="fa fa-2x"><FontAwesomeIcon icon={faReact} /> React</i></div>
                                </Col>
                                <Col>
                                    <div><i className="fa fa-2x">JQuery</i></div>
                                </Col>
                            </Col>

                        </Row>

                    </Col>
                </Row>

            </Jumbotron>
        );
    }
}

export default AboutMe;