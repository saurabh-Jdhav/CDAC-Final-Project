import React from 'react'
import axios from 'axios'

function AdminBookingItem(props) {

    const {user,patient,test,bookingId,bookingDate} = props.booking;

    

  const deleteBooking=(id)=>{
    axios.delete(`http://localhost:8080/api/b1/booking/${id}`)
    .then((response) => console.log("User deleted"+response));
  }
  return (
    <>
        <div className='container row border border-5 rounded border-success pt-2 pb-3 mb-3' style={{backgroundColor :"rgb(225, 254, 229)" }}>
        
        <div className='d-flex flex-row-reverse '>
        <i className="bi bi-x-square-fill h4 " onClick={()=>deleteBooking()} style={{margin:"-2px 0px",color:"#CD5C5C"}}></i>
        </div>
            <div className="col-md-12 my-2 ">
                <div className="card bg-success " style={{ color: "white" }}>

                    <div className="card-body d-flex justify-content-between">
                        <h5 className="card-title" ><span>NAME      : </span>{user.firstName+" "+user.lastName}</h5>
                        <h5 className="card-text"><span>BOOKING ID  : </span>{bookingId}</h5>
                        <h6 className="card-text"><span>BOOKING DATE: </span>{bookingDate}</h6>
                    </div>
                </div>
            </div>
            <div className="col-md-7 my-2 ">
                <div className="card bg-success " style={{ color: "white" }}>

                    <div className="card-body">

                        <h5 className="card-title" ><span>PATIENT ID    : </span>{patient.patientId}</h5>
                        <h5 className="card-text"><span>PATIENT NAME    : </span>{patient.firstName+" "+patient.lastName}</h5>
                        <h5 className="card-text"><span>PATIENT EMAIL   : </span>{patient.email}</h5>
                        <h5 className="card-title"><span>PATIENT MOBILE : </span>{patient.mobileNo}</h5>
                        <h5 className="card-title"><span>PATIENT ADHAAR : </span>{patient.adhaarNo}</h5>
                        <h5 className="card-text"><span>PATIENT CITY    : </span>{patient.city}</h5>
                        <h5 className="card-text"><span>PATIENT STATE   : </span>{patient.state}</h5>
                        <h5 className="card-text"><span>PATIENT ADDRESS : </span>{patient.address}</h5>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-5 h-auto my-2 ">
                <div className="card bg-success " style={{ color: "white" ,height:"100%"}}>

                    <div className="card-body">

                        <h5 className="card-title"><span>TEST ID    : </span>{test.testId}</h5>
                        <h5 className="card-text"><span>TEST NAME   : </span>{test.testName}</h5>
                        <h5 className="card-text"><span>TEST CHARGES    : </span>{test.testCharges}</h5>
                    </div>
                </div>
            </div>
            
        </div>
        </>
  )
}

export default AdminBookingItem