import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdDelete } from "react-icons/md";

function TodoDeleteModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {handleDelete,task,delid} = props;
  const handleTwoFunctions = (id) => {
    handleClose();
    handleDelete(id);
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <MdDelete />
      </Button>

        <Modal className='delModal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className='delModalBody'>
          <label>Do you confirm to Delete this task?</label>
          <input type="text" value={task} disabled={true}/>
          </Modal.Body>
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