import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

export default function ModalCreateMovie({movies, setMovies, setNewMovie, newMovie}){
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleChange = (event) =>{
        setNewMovie(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        const movieToAddToState ={
            id: movies.length+1,
            content: newMovie,
            date: new Date().toISOString(),
            important: Math.random()<0.5,
        }
        setMovies([...movies, movieToAddToState])
        setNewMovie("");
        handleCloseEdit();
    }
    return(
        <div>
            <Button variant="success" onClick={handleShowEdit}>Crear Pelicula +</Button>
            <Modal show={showEdit} onHide={handleCloseEdit} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control onChange={handleChange} value={newMovie} type="text" placeholder="Normal text" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                    Cancelar
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                    Crear Pelicula
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}