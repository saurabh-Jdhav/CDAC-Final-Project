import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './zz_all.css';



const PaymentRecipet = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if(!sessionStorage["userId"]>0 || (sessionStorage["email"]===null || sessionStorage["email"]==="")){
		  navigate("/login")
		}
	  }, []);


const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const patientName = sessionStorage.getItem("patient FirstName");
const PatientLastName = sessionStorage.getItem("Patient LastName");
const state = sessionStorage.getItem("Patient State");
const city= sessionStorage.getItem("Patient City");
const address = sessionStorage.getItem("Patient Address");
const email = sessionStorage.getItem("Patient Email");
const firstName = sessionStorage.getItem("firstName");
const lastName = sessionStorage.getItem("lastName");

console.log(patientName,lastName)

	  console.log("payment"+sessionStorage["testCharges"]);
	return (

		<>
			<div className="receipt-content">
			<p style={{color :"#016a01"}} className="text-center h1 fw-bold">Receipt</p>
				<div className="container bootstrap snippets bootdey">
					<div className="row">
						<div className="col-md-12">
							<div className="invoice-wrapper">
							<p className="text-center h4 fw-bold mb-2 mx-1 mx-md-2 mt-2 ">E-Pathology payment Receipt</p>
								<div className="intro">
									Hi <strong>{firstName} {lastName}</strong>,
									<br></br>
									This is the receipt for a payment of <strong>Rs. {sessionStorage["testCharges"]}</strong> for your <strong>{sessionStorage["testName"]}</strong>
								</div>

								<div className="payment-info">
									<div className="row">
										<div className="col-sm-6">
											<p>Receipt No.</p>
											<strong>{Math.random().toString(16).substr(2, 8)}</strong>
										</div>
										<div className="col-sm-6 text-right">
											<p>Payment Date</p>
											<strong>{date}</strong>
										</div>
									</div>
								</div>

								<div className="payment-details">
									<div className="row">
										<div className="col-sm-6">
											<p><strong>Patient Details-</strong></p>
											<strong>
											{patientName} {PatientLastName}
											</strong>
											<p>
												{address} <br></br>
												 {city} <br></br>
												{state} <br></br>
												Email-
												<Link to="#">
													{email}
												</Link>
											</p>
										</div>
										<div className="col-sm-6 text-right">
											<p>Payment To</p>
											<strong>
												Cdac Delhi 
											</strong>
											<p> 
												<br/>
												 Centre for Development of Advanced Computing,<br></br>
												 Plot no. 20, FC-33,Institutional Area,Jasola,<br></br>
												 New Delhi 110025(India)<br></br>
												 Email-
												<Link to="#">
													saurabh@cdac.in
												</Link>
											</p>
										</div>
									</div>
								</div>
								<hr></hr>

								<div className="line-items">

									
									<div className="total text-right">
										<center>
											<p className="extra-notes">
												<strong>Address</strong>
												<strong>Centre for Development of Advanced Computing Plot no. 20, FC-33,Institutional Area,Jasola,New Delhi - 110025(India)</strong>
											</p>
										</center>
									</div>

									<div className="print btn-btn-primary">
										<button
											type="submit"
											className="btn btn-success text-md-left"
										>
											print Reciept
										</button>

									</div>
								</div>
							</div>

							<div className="footer">
							
							</div>
						</div>
					</div>
				</div>
			</div>



		</>
	)
}

export default PaymentRecipet