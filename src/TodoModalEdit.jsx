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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ModalEditBody">
          <div>
              <label>Existing Task</label>
              <input type="text" value={task} disabled={true}/>
          </div>
          <div>
              <label>New Task</label>
              <input type="text" onChange={EditedInput} autoFocus={true} />
          </div>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => handleEditFunction(id, task)}
          >
            Update
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
  );
}

export default TodoModalEdit;
