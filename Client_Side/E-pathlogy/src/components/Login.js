import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loginimg from "../Images/lg2.png";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

//Login component will return view 
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");//email id will be collected in email using setemail from input tag
  const [password, setpassword] = useState("");//same as email
  const [emailShow, setEmailShow] = useState(false);
  const [otpShow, setOtpShow] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [changeInfo, setChangeInfo] = useState({
                                      email:"",
                                      otp:"",
                                      password:""
                                    })

  const dailog = {
    emailRef: useRef(null),
    otpRef: useRef(null),
    passwordRef: useRef(null)
  }

  const handleClose = () => {
    setEmailShow(false)
    setOtpShow(false)
    setPasswordShow(false)
  };

  const handleShow = (type) => {
      switch (type) {
        case "email":
            setEmailShow(true)
            break;
        case "otp":
            setOtpShow(true)
            break;
        case "password":
            setPasswordShow(true)
            break;
        default:
          handleClose();
    }
  };

  const sendEmailForget=()=>{
    axios
        .post("http://localhost:8080/api/user/otpgenerator/", changeInfo)
        .then((response) => {
          console.log(response)
        })
    setEmailShow(false)
    dailog.otpRef.current.click();
  }

  const sendOtpForget=()=>{
    axios
        .post(`http://localhost:8080/api/user/otpverify/${changeInfo.otp}`)
        .then((response) => {
          console.log(response)
          if(response.data==="OTP verified"){
              setOtpShow(false)
              dailog.passwordRef.current.click();
          }
          else{
            setOtpShow(false)
            toast.error("Verification Failed")
          }
        })
  }

  const sendPasswordForget=()=>{
    axios
        .post(`http://localhost:8080/api/user/updatePassword/`,changeInfo)
        .then((response) => {
          console.log(response)
        })
    setPasswordShow(false)
    toast.success("Pssword is Changed")
  }

  const change =(e)=>{
    setChangeInfo({...changeInfo,[e.target.name]:e.target.value})
  }

  //Signin function is called when login button clicked
  const signinuser = (e) => {
    e.preventDefault();

    if (email.length === 0) {
      toast.warning("please enter your email");
    } else if (password.length === 0) {
      toast.warning("please enter your password");
    } else {
      const body = { email, password };

      axios
        .post("http://localhost:8080/api/user/signin", body)
        .then((response) => {

          const result = response.data;//Data is a object return by backend which contain all information about user
          console.log(result["data"]);

          if (result["status"] === "success") {
            toast.success("Welcome To E-Pathology");

            const { userId, firstName, lastName, email, role } = result["data"];
            sessionStorage["userId"] = userId;
            sessionStorage["firstName"] = firstName;
            sessionStorage["lastName"] = lastName;
            sessionStorage["email"] = email;
            sessionStorage["loginStatus"] = 1;
            sessionStorage["role"] = role;
            navigate("/patient");
          } else {
            toast.error("Invalid Username And Password");
          }
        });
    }
  };

  return (
    <>
      <br />
      <br />

      <br />
      <div className="d-none">

      <Button ref={dailog.emailRef} variant="success" onClick={()=>{handleShow("email")}}>
          Launch demo modal
        </Button>
  
        <Modal show={emailShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Forget Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={changeInfo.email}
                  onChange={change}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={sendEmailForget}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
        
      <Button ref={dailog.otpRef} variant="success" onClick={()=>{handleShow("otp")}}>
          Launch demo modal
        </Button>
  
        <Modal show={otpShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Forget Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter OTP here"
                  name="otp"
                  value={changeInfo.otp}
                  onChange={change}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={sendOtpForget}>
              Verift OTP
            </Button>
          </Modal.Footer>
        </Modal>
        
        <Button ref={dailog.passwordRef} variant="success" onClick={()=>{handleShow("password")}}>
            Launch demo modal
          </Button>
    
          <Modal show={passwordShow} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Forget Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={changeInfo.password}
                    onChange={change}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={sendPasswordForget}>
                Confirm Password
              </Button>
            </Modal.Footer>
          </Modal>

        </div>

      <section className="vh-90">

        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={loginimg} className="img-fluid" alt="log" width="80%" />
            </div>

            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <p Style={{color :"#016a01"}} className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ">
                  Log in
                </p>
                <div className="form-outline mb-5">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg forminputshade"
                    placeholder="Enter email address"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    {" "}
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input 
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg forminputshade"
                    placeholder="Enter password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center" onClick={()=>{dailog.emailRef.current.click()}} style={{cursor:"pointer"}}>
                 
                 <strong> <u>
                    Forgot password?
                  </u>
                </strong>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg forminputshade"
                    Style="padding-left: 2.5rem; padding-right: 2.5rem;"
                    onClick={signinuser}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/signup" className="link-success">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
      </section>
    </>
  );
};

export default Login;
//export will return above component i.e. login.js to app.js
