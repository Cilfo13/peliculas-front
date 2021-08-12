import { Navbar as Nb, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navbar(){
    return (<div>
    <Nb bg="primary" variant="dark">
        <Container>
            <Link to="/home">Inicio</Link>
            <Nav className="me-auto">
            <Link to="/home">Lista de peliculas</Link>
            <Link to="/pelicula">Buscar peliculas</Link>
            </Nav>
        </Container>
    </Nb>
</div>)
}
