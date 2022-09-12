
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


	return (

		<>

			<div className="receipt-content">
				<div className="container bootstrap snippets bootdey">
					<div className="row">
						<div className="col-md-12">
							<div className="invoice-wrapper">
								<div className="intro">
									Hi <strong>{firstName} {lastName}</strong>,
									<br></br>
									This is the receipt for a payment of  (USD) for your works
								</div>

								<div className="payment-info">
									<div className="row">
										<div className="col-sm-6">
											<p>Payment No.</p>
											<strong>434334343</strong>
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
											<p> 40/8147, C II Floor, 
												 <br></br>
												 Narakathara Road <br></br>
												 Opposite Shenoy's Theatre, <br></br>
												 Ernakulam, Kerala 682035<br></br>
												 Email-
												<Link to="#">
													sj@cdac.in
												</Link>
											</p>
										</div>
									</div>
								</div>
								<hr></hr>

								<div className="line-items">

									<div className="items">
										<div className="row item">
											<div className="col-xs-4 desc">

											</div>
											<div className="col-xs-3 qty">

											</div>
											<div className="col-xs-5 amount text-right">

											</div>
										</div>
										<div className="row item">
											<div className="col-xs-4 desc">

											</div>
											<div className="col-xs-3 qty">

											</div>
											<div className="col-xs-5 amount text-right">

											</div>
										</div>
										<div className="row item">
											<div className="col-xs-4 desc">

											</div>
											<div className="col-xs-3 qty">

											</div>
											<div className="col-xs-5 amount text-right">

											</div>
										</div>
									</div>
									<div className="total text-right">
										<center>
											<p className="extra-notes">
												<strong>Address</strong>
												<strong>40/8147, C II Floor, Narakathara Road Opposite Shenoy's Theatre, Ernakulam, Kerala 682035</strong>
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