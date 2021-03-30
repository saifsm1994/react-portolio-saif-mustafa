import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="transparent" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" bg="transparent" style={{ "color": "white", "background-color": "grey" }} />
                    <Navbar.Collapse id="basic-navbar-nav"   >
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className="navItem" style={{ "color": "white", "margin-left": "-1%", "font-size": "calc(10px + 2vmin)" }}
                            >Home</Nav.Link>
                            <Nav.Link href="#Portfolio" className="navItem" style={{ "color": "white", "margin-left": "-1%", "font-size": "calc(10px + 2vmin)" }}
                            >Portfolio</Nav.Link>
                            <Nav.Link href="#About" className="navItem" style={{ "color": "white", "margin-left": "-1%", "font-size": "calc(10px + 2vmin)" }}
                            >About Me</Nav.Link>
                            <Nav.Link href="#Contact" className="navItem" style={{ "color": "white", "margin-left": "-1%", "font-size": "calc(10px + 2vmin)" }}
                            >Contact Me</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;