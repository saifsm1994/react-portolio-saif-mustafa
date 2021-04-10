import React, { Component } from 'react';
import { Container,  Jumbotron } from 'react-bootstrap'
import '../App.css';


class HeaderPage extends Component {
    render() {
        return (

<Container>
    <Jumbotron style={{"height": "100vh", "background-color": "transparent", "color": "white"}}>
            <div style={{"margin-top": "20%", "background-color": "transparent"}}>
            <h1 style={{"fontSize": "72px", "textDecorationLine": "underline","paddingBottom": "10px"}}>Saif Mustafa</h1>
            <h3>Full Stack JavaScript Web Developer</h3>
            </div>
    </Jumbotron>
</Container>
        );
    }
}

export default HeaderPage;