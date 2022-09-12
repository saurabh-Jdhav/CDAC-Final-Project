import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {


    const navigate = useNavigate();
    const forwardPage = (str) =>{
        switch(str) {
            case "user":
              navigate("/adminusers")
              break;
            case "patient":
                navigate("/adminusers")
              break;
            case "test":
                navigate("/adminusers")
              break;
            default:
                navigate("#")
          }
    }

    return (
        <div className='row container' style={{ height: "80vh" }}>

            {/* 1ND COLOUMN */}
            <div className='col-md-6'>
                <div className='row'>
                    <div className="col-md-12 my-2 h-100% ">

                        <div className="card bg-success" style={{ color: "white", height: "150px", margin: "20px" }}>
                            <div className="card-body">
                                <div class="d-flex align-items-center justify-content-center h-100">
                                    <div class="d-flex flex-column">
                                        <h1 class="text align-self-center p-2">Users</h1>
                                        <div className="d-flex justify-content-center">
                                            <i className="bi bi-arrow-right-circle-fill h4" onClick={()=>forwardPage("user")}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-success" style={{ color: "white", height: "150px", margin: "20px" }}>
                            <div className="card-body">
                                <div class="d-flex align-items-center justify-content-center h-100">
                                    <div class="d-flex flex-column">
                                        <h1 class="text align-self-center p-2">Patients</h1>
                                        <div className="d-flex justify-content-center">
                                            <i className="bi bi-arrow-right-circle-fill h4" onClick={()=>forwardPage("patient")}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-success" style={{ color: "white", height: "150px", margin: "20px" }}>
                            <div className="card-body">
                                <div class="d-flex align-items-center justify-content-center h-100">
                                    <div class="d-flex flex-column">
                                        <h1 class="text align-self-center p-2">Test</h1>
                                        <div className="d-flex justify-content-center">
                                            <i className="bi bi-arrow-right-circle-fill h4" onClick={()=>forwardPage("test")}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2ND COLOUMN */}
            <div className='col-md-6'>


            </div>


        </div>

    )
}

export default AdminDashboard