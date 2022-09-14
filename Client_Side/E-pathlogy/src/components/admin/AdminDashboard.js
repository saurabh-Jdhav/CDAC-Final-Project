import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    

    const navigate = useNavigate();

    const [body, setBody] = useState({ testName: "", testCharges: "" })

    const forwardPage = (str) => {
        switch (str) {
            case "user":
                navigate("/adminusers")
                break;
            case "patient":
                navigate("/adminPatient")
                break;
            case "test":
                navigate("/adminTest")
                break;
            default:
                navigate("#")
        }
    }
    const addTest = () => {
        axios
            .post("http://localhost:8080/api/t1/test", body)
            .then((res) => {
                console.log("AdminDashBOard" + res)
                setBody({ testName: "", testCharges: "" })
                toast.success("Test is Added Successfully");
            })
    }

    const change = (e) => {
        //spread operator : saperate all field or collect unlimited values
        setBody({ ...body, [e.target.name]: e.target.value })
    }

    return (
        <div className='row' style={{ height: "80vh", overflow:'hidden' }}>

            {/* 1ND COLOUMN */}
            <div className='col-md-6'>
                <div className='row'>
                    <div className="col-md-12 my-2 h-100% ">

                        <div className="card bg-success" style={{ color: "white", height: "170px", margin: "20px" }}>
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="d-flex flex-column">
                                        <h1 className="text align-self-center p-2">Users</h1>
                                        <div className="d-flex justify-content-center">
                                            <i className="bi bi-arrow-right-circle-fill h4" onClick={() => forwardPage("user")}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-success" style={{ color: "white", height: "170px", margin: "20px" }}>
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="d-flex flex-column">
                                        <h1 className="text align-self-center p-2">Patients</h1>
                                        <div className="d-flex justify-content-center">
                                            <i className="bi bi-arrow-right-circle-fill h4" onClick={() => forwardPage("patient")}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-success" style={{ color: "white", height: "170px", margin: "20px" }}>
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="d-flex flex-column">
                                        <h1 className="text align-self-center p-2">Test</h1>
                                        <div className="d-flex justify-content-center">
                                            <i className="bi bi-arrow-right-circle-fill h4" onClick={() => forwardPage("test")}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2ND COLOUMN */}
            <div className="col-md-6 d-flex">

                <div className="card bg-success " style={{ color: "white", width: "100%", margin: "20px" }}>
                    <div className="card-body">

                        <div className="d-flex align-items-center justify-content-center h-100">
                            <div className="d-flex flex-column">

                                <h4 className="text align-self-center p-2">TEST NAME</h4>
                                <input type="text" value={body.testName} className="form-control" name="testName" onChange={change} />
                                <h4 className="text align-self-center p-2">TEST CHARGES</h4>
                                <input type="number" value={body.testCharges} className="form-control" name="testCharges" onChange={change} />
                                <br />
                                <div className="d-flex justify-content-center">
                                    <button type="submit" onClick={addTest} className="btn btn-light">Add Test</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>



        </div>

    )
}

export default AdminDashboard