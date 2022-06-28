import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../../Styles/Style.css';
import Home from "../Home/Home";
import About from '../About/About';
import Contact from '../Contact/Contact';

export default function App() {
    return (
        <div>            
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">Ivan/Portafolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/About">About</Nav.Link>
                                <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>                            
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Contact" element={<Contact />}/>                    
                </Routes>
            </Router>                        
        </div>
    )
}