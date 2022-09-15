import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import { useNavigate } from "react-router"

import axios from 'axios';
import { Alert } from 'bootstrap';
//import { Toast } from 'bootstrap';

//function component not function
const Patientdetails = () => {
  //It will be executed automatically whenever the component is rendered by reactDOM (this could be done again and again if needed)
  useEffect(() => {
  //agar user mu uthake sidha ghus aya to usko login page pe bhejdiya jayega 
    if(!sessionStorage["userId"]>0 || (sessionStorage["email"]===null || sessionStorage["email"]==="")){
      navigate("/login")
    }
  }, []);
  
  const navigate = useNavigate()

  const [firstName,setfirstname]=useState ("")
  const [lastName,setlastname]=useState ("")
  const [mobileNo,setmobileno]=useState ("")
  const [address,setaddress]=useState ("")
  const [email,setemail]=useState ("")
  const [city,setcity]=useState ("")
  const [state,setstate]=useState ("1")
  const [adhaarNo,setaadharno]=useState ("")
  
  
 function onCreatePost(e)
 {
   e.preventDefault();
  if (firstName.length === 0) {
    toast.warning("please enter your firstName")
  }
  else if (lastName.length === 0) {
    toast.warning("please enter your lastName")
  }
  else if (mobileNo.length === 0) {
    toast.warning("please enter your Mobile Number")
  }
  else if (address.length === 0) {
    toast.warning("please enter your Address")
  }
  else if (email.length === 0) {
    toast.warning("please enter your email")
  }
  else if (city.length === 0) {
    toast.warning("please enter your city")
  }
  else if (state.length === 0) {
    toast.warning("please enter your state")
  }
  else if (!adhaarNo.length === 12) {
    toast.warning("please enter your Adhaar Number")
  }
  else {
    //then we are creating object called body with that field and we are sending that to the server 
   const postdata ={
    firstName,
    lastName,
    mobileNo,
    address,
    email,
    city,
    state,
    adhaarNo,
   };
   axios.post("http://localhost:8080/api/p1/patient",postdata,)
   .then((response) =>{


    const result = response.data
    // console.log(result["data"])

    if (result["status"] === "success") {
      toast.success("Details Added")

      const { patientId,firstName,lastName,email,state,city} = result["data"];
      sessionStorage["PatientId"] = patientId;
      sessionStorage["patient FirstName"] = firstName;
      sessionStorage["Patient LastName"] = lastName;
      sessionStorage["Patient Email"] = email;
      sessionStorage["Patient Address"] = address;
      sessionStorage["Patient City"] = city;
      sessionStorage["Patient State"] = state;
//why to store data in sessionStorage ??
// we are collection data in result and that data is stored in sessionStorage, so that we can use that data in next components for further manupulation
      navigate('/testbook')
    }
    else {
      toast.error("Invalid Details")
      navigate('/testbook');
    }
   });

  }
 }

  return (
    <>
    <div className='container'>
    <form onSubmit={onCreatePost}>
        <div  className="form-row">
      <div  className="form-group col-md-6">
          <label >First Name</label>
          <input type="text"  className="form-control forminputshade" id="firstname" placeholder=" Patient First Name" value={firstName}
                        onChange={(e) => setfirstname(e.target.value)}/>
        </div>
        <div  className="form-group col-md-6">
          <label >Last Name</label>
          <input type="text"  className="form-control forminputshade" id="lastname" placeholder=" Patient Last Name" value={lastName}
                        onChange={(e) => setlastname(e.target.value)}/>
        </div>
        <div  className="form-group col-md-6">
          <label >Mobile Number</label>
          <input type="number"  className="form-control forminputshade" id="mobileno" placeholder=" Patient Mobile Number" value={mobileNo}
                        onChange={(e) => setmobileno(e.target.value)}/>
        </div>
        <div  className="form-group col-md-6">
          <label >Email</label>
          <input type="email"  className="form-control forminputshade" id="email" placeholder="Email"value={email}
                        onChange={(e) => setemail(e.target.value)}/>
        </div>
        <div  className="form-group col-md-6">
          <label >Aadhar Number</label>
          <input type="number"  className="form-control forminputshade" id="aadharno" placeholder="Patient Aadhar Number" value={adhaarNo}
                        onChange={(e) => setaadharno(e.target.value)}/>
        </div>
      </div>
      <div className='col-md-12'>
      <div  className="md-form">
        <label >Address</label>
        <textarea type="text" id="address" name="message" rows="2"column="12" className="form-control forminputshade md-textarea" value={address}
                        onChange={(e) => setaddress(e.target.value)}></textarea>
      </div>
      </div>
      <div  className="form-row">
        <div  className="form-group col-md-6">
          <label>City</label>
          <input type="text"  className="form-control forminputshade" id="city" value={city}
                        onChange={(e) => setcity(e.target.value)}/>
        </div>
        <div  className="form-group col-md-4">
          <label>State</label>
          
          <select id="state"  className="form-control forminputshade" value={state}
                        onChange={(e) => setstate(e.target.value)}>
            <option value="DEFAULT" disabled>Select your state ...</option>
            <option >Kerala</option>
            <option>Maharashtra</option>
            <option>Telangana</option>
            <option>Punjab</option>
          </select>
        </div>
      </div>
      <br></br>
      
    </form>
    </div>
    <div className='container text-center'>
    <button type="submit"  className="btn btn-success text-md-left" onClick={onCreatePost}>Submit</button>
    </div>
    </>
  )
}

export default Patientdetails