import DatePicker from "react-date-picker";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router"
import { toast } from "react-toastify"




const TestBook = () => {
  const navigate = useNavigate()
  const [value1, onChange] = useState(new Date());

  const [test2, settest2] = useState([]);
  const user = sessionStorage.getItem("userId");
  const patient = sessionStorage.getItem("PatientId");

  const [test, settest1] = useState("");

  function handleSettest1(e) {
    settest1(e.target.value);
    console.log(test);
  }

  useEffect(() => {
    if(!sessionStorage["userId"]>0 || (sessionStorage["email"]===null || sessionStorage["email"]==="")){
      navigate("/login")
    }
    fetchTest();
  }, []);

  const fetchTest = () => {
    //Here we are fetching all kind of test provided by that lab and storing that data

    axios.get("http://localhost:8080/api/t1/test").then((response) => {
      console.log(response);
      
      settest2(response.data);
    
    });
  };

  const bookingDate = value1;

  var postdata = {
    test,
    bookingDate,
    user,
    patient,
    value1,
  };

  const forwardtest = () => {
    axios
      .post("http://localhost:8080/api/b1/book", postdata)
      .then((response) => {
       
        const result = response.data;
        console.log(result["data"]);

        if (result["status"] === "success") {
           toast.success("proceed to payment");
           navigate("/payment")
        } else {
            toast.error("Something went Wrong!!!");
        }
      });
  };

  return (
    <>
      <div className=" mx-auto" style={{height:"80vh",paddingTop:"150px"}}>
        <div className=" container-fluid  text-center h-50">
          <div className="container colalign-self-center">
            <select className="custom-select" onChange={handleSettest1}  >
              {/* map is a high level iterator */}
              {test2.map((value) => {//value is a test Object that contain details of every single test provided by server as per lab requiment 
                return (
                  <option value={value.testId}>
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
              onChange={onChange}
              value={value1}
              format="yyyy-MM-dd"
              minDate={new Date()}
            />
          </div>
          <br></br>
          <div className="container text-center">
            <button
              type="submit"
              className="btn btn-success text-md-left"
              onClick={forwardtest}
            >
              Proceed To payment
            </button>
          </div>
        </div>
      </div>
      <div className=" mx-auto" Style="width: 200px; height:50% "></div>
    </>
  );
};

export default TestBook;