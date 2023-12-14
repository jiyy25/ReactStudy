import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home" className='col-12 col-md-4 text-end'>Navbar</Navbar.Brand>
                <Nav className="me-md-auto" title='e는 오른쪽 s는 왼쪽'>
                    <Link to="/">Home</Link>
                    <Link to="/com">회사소개</Link>
                    <Link to="/board">고객센터</Link>
                    {/* <Nav.Link href="#pricing">Pricing</Nav.Link> 
                    부트스트랩의 Nav.Link라는 것이 또 따로 있음.. 와우;;;;*/}
                    
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ColorSchemesExample;