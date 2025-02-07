import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaEdit } from "react-icons/fa";

function TodoModalEdit(props) {
  const [show, setShow] = useState(false);
  const [editinput, seteditinput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { handleEdit, id, task } = props;

  const EditedInput = (e) => {
    seteditinput(e.target.value);
  };

  const handleEditFunction = (id, task) => {
    handleClose();
    handleEdit(id, editinput);
  };

  return (
        <>
        <Button variant="primary" onClick={handleShow}>
        <FaEdit />
      </Button>

      <Modal className="editModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ModalEditBody">
         
          <div>
              <label>Edit Task</label>
              <input className="ModalEditBodyinput2" type="text" placeholder={task} onChange={EditedInput} autoFocus={true} />
          </div>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => handleEditFunction(id, task)}
          >
            Update
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
  );
}

export default TodoModalEdit;
