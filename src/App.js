import logo from './images/Logo1.png';
import './App.css';
import NavigationBar from './components/NavigationBar'
import HeaderPage from './components/HeaderPage'
import AboutMe from './components/AboutMe'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import ContactMe from './components/ContactMe'
import OtherProjects from './components/OtherProjects'


import { Tabs, Tab, Jumbotron } from 'react-bootstrap'

function App() {
 

function scrollDown(id){
  window.scrollTo(0,document.body.scrollHeight);

}

  return (
    <div className="Body">
      <div className="App">
        {/* <NavigationBar /> */}
        <HeaderPage title="Home" eventKey="home" />
      </div>
      <Tabs defaultActiveKey="aboutMe" id="uncontrolled-tab-example" onClick={() => {scrollDown("id")}}>
          <Tab eventKey="aboutMe" title="About Me"  >
            <AboutMe id="id" />
          </Tab>
          <Tab eventKey="project1" title="Project 1" className="Projects" >
            <Project1 />
          </Tab>
          <Tab eventKey="project2" title="Project 2" className="Projects" >
            <Project2 />
          </Tab>
          <Tab eventKey="otherProjects" title="Other Projects" className="Projects" >
            <OtherProjects />
          </Tab>
          <Tab eventKey="contactMe" title="Contact Me" >
            <ContactMe />
          </Tab>
        </Tabs>
    </div>
  );
}

export default App;
