import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import  signimg from "../Images/lg3.png"
import { toast } from "react-toastify"
import axios from 'axios';
import { useNavigate } from "react-router"

const SignUp = () => {
  const navigate = useNavigate()
  const [firstName,setfirstname]=useState ("")
  const [lastName,setlastname]=useState ("")
  const [email,setemail]=useState ("")
  const [password,setpassword]=useState ("")

  function onCreateUser(e)
  {


    e.preventDefault();
   

    if (firstName.length === 0) {
      toast.warning("please enter your Firstname")
    }
    else if (lastName.length === 0) {
      toast.warning("please enter your lastname")
      
    }
    else if (password.length === 0) {
      toast.warning("please enter your password")
      
    }
    else if (email.length === 0) {
      toast.warning("please enter your email id")
      
    }
    

    else if(true) {
      const postdata ={
        firstName,
        lastName,
        password,
        email,
        
       };
try{
    axios.post("http://localhost:8080/api/user/signup",postdata,)
    .then((response) =>{
      console.log("=>") 
      console.log(response)
      console.log("=====") 
      var result = response["data"]
      console.log(result)

      if (result["status"] === "success"){
        toast.success("Registration successful")

        navigate('/')
      }else{
        toast.error("User alredy exists.")
      }
    
    });
  }
  catch(error){
    toast.error("User alredy exists.")
  }
    
  }
  }
 
  return (
    <div>

<section className="vh-10" Style="background-color: #eee;">
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" Style="border-radius: 25px;">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p style={{color :"#016a01"}} className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control forminputshade" value={firstName}
                        onChange={(e) => setfirstname(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example1c">First Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control forminputshade" value={lastName}
                        onChange={(e) => setlastname(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example3c">Last Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example4cd" className="form-control forminputshade" value={email}
                        onChange={(e) => setemail(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example4cd">Email ID</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control forminputshade" value={password}
                        onChange={(e) => setpassword(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-success btn-lg forminputshade" onClick={onCreateUser}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={signimg} id="signimg" className="img-fluid" alt="Imag"  />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default SignUp