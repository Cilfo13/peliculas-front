import { Navbar as Nb, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navbar(){
    return (<div>
    <Nb bg="primary" variant="dark">

        <Container>
            <Link style={{color: "white"}} className="nav-link active" to="/home">Inicio</Link>
            <Nav  className="me-auto">
            <Link className="nav-link active" to="/home">Lista de peliculas</Link>
            <Link className="nav-link active" to="/pelicula">Buscar peliculas</Link>
            </Nav>
        </Container>
    </Nb>
</div>)
}
