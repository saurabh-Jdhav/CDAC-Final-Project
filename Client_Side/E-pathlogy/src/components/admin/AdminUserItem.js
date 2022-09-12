import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserItem = (props) => {

    let { userItem } = props
    const navigate = useNavigate();
    const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/api/user/user/${id}`)
    .then((response) => console.log("User deleted"+response));
    }

    const redirectBookings=(id) => {
    navigate("/adminUserbookings",{state : {id:id}})
    }
   
    const updateNote = () => {

    }
    return (
        <div className="col-md-4 my-2 ">
            <div className="card bg-success " style={{ color: "white" }}>

                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row-reverse iconLeft">
                            <h5 className="card-title" >{userItem.userId}</h5>
                        </div>
                        <div className="d-flex flex-row-reverse iconRight">
                            <i className="bi bi-trash3" onClick={() => deleteUser(userItem.userId)}></i>
                            <i className="bi bi-pencil-square mx-2" onClick={() => { updateNote() }} ></i>
                        </div>
                    </div>
                    <h5 className="card-text">{userItem.firstName + " " + userItem.lastName}</h5>
                    <h6 className="card-text">{userItem.email}</h6>
                    <div className="d-flex flex-row-reverse iconRight">
                        <i className="bi bi-arrow-right-circle-fill h4" onClick={()=>{redirectBookings(userItem.userId)}} ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem