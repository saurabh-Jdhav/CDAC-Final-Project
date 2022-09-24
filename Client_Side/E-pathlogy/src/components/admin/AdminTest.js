import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

function AdminTest() { 
  const navigate = useNavigate(null);
    const updateRef = useRef(null)
    const [editTest, setEditTest] = useState({tesName:"",testCharges:""});
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        setShow(false)
    };

    const handleShow = () => {
        setShow(true)
    };

    const change =(e)=>{
        setEditTest({...editTest,[e.target.name]:e.target.value})
    }

    const redForUpdate =()=>{
        axios.put(`http://localhost:8080/api/t1/test/${editTest.testId}`,editTest)
        .then((response) =>{
            console.log("UpdatedTest "+response)
            toast.success("Test is Updated");
            navigate(0);
        });
        
        setShow(false)
    }


    const [test, setTest] = useState([]);
    const getTest = async () => {
        let baseUrl = `http://localhost:8080/api/t1/test`;

        const response = await fetch(baseUrl, {
            method: "GET",
        });
        const json = await response.json();
        setTest(json);
    };

    const deleteTest = (id) => {
        axios
            .delete(`http://localhost:8080/api/t1/test/${id}`)
            .then((response) => toast.success("Test is Deleted"));
            navigate(0);
    };

    const updateTest = (test) =>{
        setEditTest(test)
        updateRef.current.click();
    }

    useEffect(() => {
        getTest();
    }, []);

    return (
      <>
      <div style={{minHeight:"600px"}}>
        
        <Button ref={updateRef} variant="success d-none" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Test Name"
                  name="testName"
                  value={editTest.testName}
                  onChange={change}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Test Charges"
                  name="testCharges"
                  value={editTest.testCharges}
                  onChange={change}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={redForUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="row " >
            {test.map((test) => {
                return (
                    <div key={test.testId} className="col-md-4 my-2">
                        <div
                            key={test.testId}
                            className="card bg-success"
                            style={{ color: "white", margin: "20px" }}
                        >
                            <div className="card-body">
                                <div className="d-flex flex-row-reverse ">
                                    <i
                                        className="bi bi-x-square-fill h4 "
                                        onClick={() => deleteTest(test.testId)}
                                        style={{ margin: "-2px 0px", color: "#CD5C5C" }}
                                    ></i>
                                    <i className="bi bi-pencil-square mx-2 h4" onClick={()=>updateTest(test)}></i>
                                </div>
                                <div className="d-flex h-100">
                                    <div className="d-flex flex-column">
                                        <h5>
                                            <b>TEST ID : </b>
                                            {test.testId}
                                        </h5>
                                        <h5>
                                            <b>TEST NAME : </b>
                                            {test.testName}
                                        </h5>
                                        <h5>
                                            <b>TEST CHARGES : </b>
                                            {test.testCharges}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        
        </div>
      </>
    );
}

export default AdminTest;
