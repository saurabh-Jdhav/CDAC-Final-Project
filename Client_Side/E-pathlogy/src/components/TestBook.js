import DatePicker from "react-date-picker";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const TestBook = () => {
  const navigate = useNavigate();
  const [currentDate, changeDate] = useState(new Date());

  const [test2, settest2] = useState([]);
  const user = sessionStorage.getItem("userId");
  const patient = sessionStorage.getItem("PatientId");

  const [test, settest1] = useState("1");

  function handleSettest1(e) {
    settest1(e.target.value);
  }

  useEffect(() => {
    if (
      !sessionStorage["userId"] > 0 ||
      sessionStorage["email"] === null ||
      sessionStorage["email"] === ""
    ) {
      navigate("/login");
    }
    fetchTest();
  }, []);

  const fetchTest = () => {
    //Here we are fetching all kind of test provided by that lab and storing that data

    axios.get("http://localhost:8080/api/t1/test").then((response) => {

      settest2(response.data);
    });
  };

  const bookingDate = currentDate;

  var postdata = {
    test,
    bookingDate,
    user,
    patient,
    currentDate,
  };

  const forwardtest = () => {
    axios
      .post("http://localhost:8080/api/b1/book", postdata)
      .then((response) => {
        const result = response.data;

        if (result["status"] === "success") {
          toast.success("proceed to payment");
          navigate("/payment");
        } else {
          toast.error("Something went Wrong!!!");
        }
      });
  };

  const getTestCharges=()=>{
    axios
      .get(`http://localhost:8080/api/t1/testbyid/`+test)
      .then((response) => {
        sessionStorage["testCharges"] = response.data.testCharges
        sessionStorage["testName"] = response.data.testName
      });
      forwardtest();
  }

  // const getRazorId=()=>{
  //   let result = "";
  //   axios
  //     .post("http://localhost:8080/api/pt1/razorpay")
  //     .then((response) => {
  //       console.log("razor_id"+ response);
  //       result = response.data;
  //     });
  //     return result;
  // }
  
  // const razorPay = () => {
  //   const id = getRazorId();
  //   axios
  //     .get(`http://localhost:8080/api/t1/testbyid/`+test)
  //     .then((response) => {
  //       let options = {
  //         key: "rzp_test_XwKxuWFVKyiPHV", // Enter the Key ID generated from the Dashboard
  //         amount: response.data.testCharges * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //         currency: "INR",
  //         name: "Acme Corp",
  //         description: "testChargestestName",
  //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmucfzVOKGtjJWM4ZNsL4MoL39SprcJCR82A&usqp=CAU',
  //         order_id: id,
  //         callback_url: "http://google.com",
  //         prefill: {
  //           name: sessionStorage["patient FirstName"] +" "+sessionStorage["Patient LastName"],
  //           email: sessionStorage["Patient Email"],
  //           contact: "",
  //         },
  //         notes: {
  //           address:  sessionStorage["Patient Address"],
  //         },
  //         theme: {
  //           color: "#3399cc",
  //         },
  //       };

  //         let rzp1 = new window.Razorpay(options);
  //         rzp1.open();
    
  //         rzp1.on('payment.failed',(res)=>{
  //           toast.error("Payment Failed")
  //         })
  //         sessionStorage["testCharges"] = response.data.testCharges
  //     });
    
  // };

  return (
    <>
      <div className=" mx-auto" style={{ height: "80vh", paddingTop: "150px" }}>
        <div className=" container-fluid  text-center h-50">
          <div className="container colalign-self-center">
            <select className="custom-select" onChange={handleSettest1}>
              {/* map is a high level iterator */}
              {test2.map((value) => {
                //value is a test Object that contain details of every single test provided by server as per lab requiment
                return (
                  <option key={value.testId} value={value.testId}>
                    {value.testId} - {value.testName} and charges ₹
                    {value.testCharges}/-
                  </option>
                );
              })}
            </select>
          </div>

          <br></br>
          <div className="container">
            <DatePicker
              onChange={changeDate}
              value={currentDate}
              format="yyyy-MM-dd"
              minDate={new Date()}
            />
          </div>
          <br></br>
          <div className="container text-center">
            <button
              type="submit"
              className="btn btn-success text-md-left"
              onClick={getTestCharges}
            >
              Proceed To payment
            </button>
          </div>
        </div>
      </div>
      <div className=" mx-auto" style={{width: "200px", height:"50%"}}></div>
    </>
  );
};

export default TestBook;
