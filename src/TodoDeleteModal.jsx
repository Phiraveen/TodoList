import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdDelete } from "react-icons/md";

function TodoDeleteModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {handleDelete,delid} = props;
  const handleTwoFunctions = (id) => {
    handleClose();
    handleDelete(id);
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <MdDelete />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleTwoFunctions(delid)}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoDeleteModal;