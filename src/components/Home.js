import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [show, setShow] = useState(false);

  const txt = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const btnn = (e) => {
    e.preventDefault();
    if (name == "") {
      alert("Enter Name");
    } else {
      setData([...data, name]);
    }
  };

  const deleteUser = (e) => {
    const filter = data.filter((ele, i) => i !== e);
    setData(filter);
  };

  const change = (e) => {
    e.preventDefault();
    const updateUser = data.map((ele, i) => {
      return i == updateId ? edit : ele;
    });
    setData(updateUser);
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={txt} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={btnn}>
            Submit
          </Button>
        </Form>
      </div>
      <div>
        <Table striped bordered hover>
          <tbody>
            {data.map((ele, i) => {
              return (
                <>
                  <tr>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{ele}</td>
                    <td className="d-flex justify-content-evenly">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setEdit(ele);
                          setUpdateId(i);
                          handleShow();
                        }}
                      >
                        <EditIcon />
                      </Button>
                      <Button variant="danger" onClick={() => deleteUser(i)}>
                        <DeleteIcon />
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setEdit(e.target.value)}
                  value={edit}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={change}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Home;
