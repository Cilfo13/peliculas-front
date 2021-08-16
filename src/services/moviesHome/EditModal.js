import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export default function EditModal({movies, setMovies, movieId, newMovie, setNewMovie, handleCloseEdit,setShowEdit, showEdit}){
    const handleEditModal=()=>{
        let id = movieId;
        let newMovieToEdit = [...movies]
        let index = newMovieToEdit.findIndex(function(el){
            return el.id === id;
        });
        newMovieToEdit[index].title = newMovie
        setMovies([...newMovieToEdit])
        setNewMovie("");
        handleCloseEdit();
    }
    const handleChangeModal=(e) => {
        setNewMovie(e.target.value);
    }
    return(
        <Modal show={showEdit} onHide={handleCloseEdit} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Editar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control onChange={handleChangeModal} type="text" placeholder="Normal text" />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEdit}>
                Cancelar
                </Button>
                <Button variant="success" onClick={handleEditModal}>
                Guardar cambios
                </Button>
            </Modal.Footer>
        </Modal>
    )
}