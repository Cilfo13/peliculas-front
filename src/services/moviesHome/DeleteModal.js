import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function DeleteModal({movies, setMovies, movieId, handleClose, show, setShow}){
    const handleDeleteModal=()=>{
        let id = movieId;
        let NewMovieToAdd = [...movies]
        let index = NewMovieToAdd.findIndex(function(el){
            return el.id === id;
        });
        NewMovieToAdd.splice(index, 1);
        setMovies([...NewMovieToAdd]);
        handleClose();
    }
    return(
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Eliminar</Modal.Title>
                </Modal.Header>
                <Modal.Body>Seguro de que desea eliminar?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    No
                </Button>
                <Button variant="danger" onClick={handleDeleteModal}>
                    Si
                </Button>
                </Modal.Footer>
        </Modal>
    )
}