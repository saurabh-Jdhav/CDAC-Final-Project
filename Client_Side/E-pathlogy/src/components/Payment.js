import { useState, useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";


const Payment = () => {
const navigate = useNavigate()

const [dateString, setDateString] = useState(new Date());
const [cardNo,setcardnumber] = useState(0)
const [cvv,setcvv] = useState(0)
const [nameOnCard,setnameoncard] = useState("")

useEffect(() => {
  if(!sessionStorage["userId"]>0 || (sessionStorage["email"]===null || sessionStorage["email"]==="")){
    navigate("/login")
  }
  }, []);


const postpayment =() =>
{
  
  var postdata = {
    cardNo,
    cvv,
    nameOnCard,
    dateString:dateString+"",
    user:sessionStorage["userId"]
  };
  
  axios.post("http://localhost:8080/api/pt1/payment",postdata)
  .then((response) =>{
    var result = response["data"]

    if (result["status"] === "success"){
      toast.success("Payment successful")

      navigate('/paymentReciept')
    }else{
      toast.error("Something Went Wrong")
    }
  
  });

}

  return (
    <section Style="background-color: #eee;">
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card rounded-3">
            <div className="card-body mx-1 my-2">
              <div className="d-flex align-items-center">
                <div>
                  <i className="fab fa-cc-visa fa-4x text-black pe-3"></i>
                </div>
                <div>
                  <p className="d-flex flex-column mb-0 text-primary">
                   <strong>Card Number</strong><span className="small text-muted"></span>
                    <input type ="number" className="form-control forminputshade" placeholder='Enter Your card Number' onChange={(e) => setcardnumber(e.target.value)}/>
                    <strong>CVV</strong><span className="small text-muted"></span>
                    <input type ="number" className="form-control forminputshade" placeholder='Enter Your CVV' onChange={(e) => setcvv(e.target.value)}/>
                    <strong>Expirity Date</strong><span className="small text-muted"></span>
                    <DatePicker className="form-control forminputshade"
                      onChange={setDateString}
                      value={dateString}
                      format="yyyy-MM-dd"
                      minDate={new Date()}
                    />
                    <strong>Name On Card</strong><span className="small text-muted"></span>
                    <input type ="text" className="form-control forminputshade" placeholder='Enter Your Name' onChange={(e) => setnameoncard(e.target.value)}/>
                    
                  </p>
                </div> 
              </div>
  
              <div className="pt-3">
                <div className="d-flex flex-row pb-3">
                  <div
                    className="forminputshade rounded border d-flex w-100 px-3 py-2 align-items-center"
                    // Style="background-color: rgba(18, 101, 241, 0.07);"
                  >
                    <div className="d-flex align-items-center pe-3">
                      <input
                        className="forminputshade form-check-input"
                        type="radio"
                        name="radioNoLabelX"
                        id="radioNoLabel11"
                        value=""
                        aria-label="..."
                        checked
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 small text-primary">Total amount</p>
                      <h6 className="mb-0 text-primary">Rs. {sessionStorage["testCharges"]}</h6>
                    </div>
                  </div>
                </div>
  
                <div className="d-flex flex-row pb-3">
                  <div className="forminputshade rounded border d-flex w-100 px-3 py-2 align-items-center">
                    <div className="d-flex align-items-center pe-3">
                      <input
                        className="forminputshade form-check-input"
                        type="radio"
                        name="radioNoLabelX"
                        id="radioNoLabel22"
                        value=""
                        aria-label="..."
                      />
                    </div>
                    <div className="d-flex flex-column py-1">
                      <p className="mb-1 small text-primary">Other Payment Method</p>
                      <div className="d-flex flex-row align-items-center">
                        <h6 className="mb-0 text-primary pe-1">Cash</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="d-flex justify-content-between align-items-center pb-1">
                <Link to="/testbook" className="text-muted">Go back</Link>
                <button type="button" className="btn btn-success btn-lg" onClick={postpayment}>Pay amount</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Payment