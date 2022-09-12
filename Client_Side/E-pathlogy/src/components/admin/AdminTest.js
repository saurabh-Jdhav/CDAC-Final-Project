import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function AdminTest() {
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
            // .then((response) => console.log("User deleted" + response));
            .then((response) => alert("User deleted" + response));
    };
    useEffect(() => {
        getTest();
    }, []);

    return (
        <div className="row ">
            {test.map((test) => {
                return (
                    <div className="col-md-4 my-2">
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
                                </div>
                                <div class="d-flex h-100">
                                    <div class="d-flex flex-column">
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
    );
}

export default AdminTest;
