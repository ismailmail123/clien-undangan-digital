import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import brand from "../../assets/logo-undangan2.png"

function OffcanvasExample() {
  return (
    <>
     
        <Navbar key="false" expand="false" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <Image src={brand} style={{width: "250px", height: "60px", marginLeft: "-40px"}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                The Invitation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Halaman Utama</Nav.Link>
                  <Nav.Link href="#action2">Lihat tampilan</Nav.Link>
                  <Nav.Link href="#action2">Edit Undangan</Nav.Link>
                  <Nav.Link href="#action2">Tambahkan Penerima</Nav.Link>
                  <Nav.Link href="#action2">Daftar Penerima</Nav.Link>
                 
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default OffcanvasExample;