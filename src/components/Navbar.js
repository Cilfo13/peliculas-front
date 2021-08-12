import { Navbar as Nb, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navbar(){
    return (<div>
    <Nb bg="primary" variant="dark">
        <Container>
            <Link to="/home"><Nb.Brand href="#home">Inicio</Nb.Brand></Link>
            <Nav className="me-auto">
            <Link to="/home"><Nav.Link href="#home">Lista de peliculas</Nav.Link></Link>
            <Link to="/pelicula"><Nav.Link href="#features">Buscar peliculas</Nav.Link></Link>
            </Nav>
        </Container>
    </Nb>
</div>)
}
