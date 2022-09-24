import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminPatient() {
    const navigate = useNavigate(null);
    const [patient, setPatient] = useState([]);
    const getpatient = async () => {
        let baseUrl = `http://localhost:8080/api/p1/patient`;

        const response = await fetch(baseUrl, {
            method: "GET",
        });
        const json = await response.json();
        setPatient(json);
    };

    const deletepatient = (id) => {
        axios
            .delete(`http://localhost:8080/api/p1/patient/${id}`)
            .then((response) => toast.success("Patient is Deleted"));
            // window.location.reload();
            navigate(0);
    };


    useEffect(() => {
        getpatient();
    }, []);


  return (
    <div className="row" style={{minHeight:"600px"}}>
        {patient.map((patient) => {
            return (
                <div className="col-md-4 my-2">
                    <div
                        key={patient.patientId}
                        className="card bg-success"
                        style={{ color: "white", margin: "20px" }}
                    >
                        <div className="card-body">
                            <div className="d-flex flex-row-reverse ">
                                <i
                                    className="bi bi-x-square-fill h4 "
                                    onClick={() => deletepatient(patient.patientId)}
                                    style={{ margin: "-2px 0px", color: "#CD5C5C" }}
                                ></i>
                            </div>
                            <div class="d-flex h-100">
                                <div class="d-flex flex-column">
                                    <h5 className="card-title" ><b>PATIENT ID    : </b>{patient.patientId}</h5>
                                    <h5 className="card-text"><b>NAME    : </b>{patient.firstName+" "+patient.lastName}</h5>
                                    <h5 className="card-text"><b>EMAIL   : </b>{patient.email}</h5>
                                    <h5 className="card-title"><b>MOBILE : </b>{patient.mobileNo}</h5>
                                    <h5 className="card-title"><b>ADHAAR : </b>{patient.adhaarNo}</h5>
                                    <h5 className="card-text"><b>CITY    : </b>{patient.city}</h5>
                                    <h5 className="card-text"><b>STATE   : </b>{patient.state}</h5>
                                    <h5 className="card-text"><b>ADDRESS : </b>{patient.address}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
  )
}

export default AdminPatient