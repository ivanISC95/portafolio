import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../../Styles/Style.css';
import Home from "../Home/Home";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Info from "../Home/Info";
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
                                <Nav.Link as={Link} to="/Info">info</Nav.Link>
                                <NavDropdown title="Links" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Contact" element={<Contact />}/>
                    <Route path="/Info" element={<Info />}/>
                </Routes>
            </Router>                        
        </div>
    )
}