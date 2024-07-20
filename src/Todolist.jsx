import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Todolist.css";
import TodoModalEdit from "./TodoModalEdit";
import TodoDeleteModal from "./TodoDeleteModal";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Todolist() {
  const [listofItems, setlistofItems] = useState([]);
  const [inputdata, setinputdata] = useState("");
  const inputref = useRef(null);

  const handleget = async () => {
    let response = await axios.get(
      "https://todo-data-uu2x.onrender.com/todoList"
    );
    console.log(response.data);
    setlistofItems(response.data);
  };

  const handleinput = (e) => {
    setinputdata(e.target.value);
  };

  const handleadd = async () => {
    if (inputdata === "") {
      return;
    }
    let body = {
      task: inputdata,
    };

    let response = await axios.post(
      "https://todo-data-uu2x.onrender.com/todoList",
      body
    );

    setinputdata("");
    handleget();
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleadd();
    }
  };

  const handleEdit = async (id, newTask) => {
    if (newTask === "") {
      return;
    }

    let body = {
      id: id,
      task: newTask,
    };

    let response = await axios.put(
      `https://todo-data-uu2x.onrender.com/todoList/${id}`,
      body
    );
    handleget();
  };

  const handleDelete = async (id) => {
    let response = await axios.delete(
      `https://todo-data-uu2x.onrender.com/todoList/${id}`
    );
    handleget();
  };

  useEffect(() => {
    inputref.current.focus();
    handleget();
  }, []);

  return (
    <Container>
      <Row>
      <div className="mainCont">
      <div className="inputCont">
        <input
          ref={inputref}
          onChange={handleinput}
          className="m-5"
          type="text"
          placeholder="Enter Task here ..."
          onKeyDown={handleEnter}
          value={inputdata}
        />
        <button onClick={handleadd} className="btn">
          ADD +
        </button>
      </div>

      <div className="outputCont">
        <ul>
          {listofItems.map((aaa, i) => (
            <div key={i} className="EachTask">
              <li>{aaa.task}</li>

              <TodoModalEdit
                handleEdit={handleEdit}
                id={aaa.id}
                task={aaa.task}
              />

              <TodoDeleteModal handleDelete={handleDelete} delid={aaa.id} />
            </div>
          ))}
        </ul>
      </div>
    </div>
      </Row>
    </Container>
   
  );
}
